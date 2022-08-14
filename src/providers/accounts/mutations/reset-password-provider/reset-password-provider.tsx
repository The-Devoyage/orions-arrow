import { FormikHelpers, useFormik } from "formik";
import React, { useMemo, ReactNode } from "react";
import { ResetPasswordInput } from "../../../../types/generated";
import { useMutation } from "@apollo/client";
import { AccountBase, MutationBase } from "../../../../types";
import { Context } from "../../../..";

interface ResetPasswordProviderProps<Account extends AccountBase> {
  children: ReactNode;
  mutation: MutationBase<ResetPasswordInput, Account>;
}

export const ResetPasswordProvider = <Account extends AccountBase>({
  children,
  mutation,
}: ResetPasswordProviderProps<Account>) => {
  const [resetPassword, { loading, reset, data }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );

  const account = data?.resetPassword;

  const handleResetPassword = (
    values: ResetPasswordInput,
    helpers: FormikHelpers<ResetPasswordInput>
  ) => {
    resetPassword({
      variables: {
        resetInput: { ...values },
      },
      onCompleted: (data) =>
        mutation.onCompleted(data?.resetPassword, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
    });
  };

  const form = useFormik<ResetPasswordInput>({
    initialValues: mutation.variables ?? {
      email: "",
      password: "",
      code: "",
    },
    onSubmit: handleResetPassword,
  });

  const value = useMemo(() => ({ form, loading, account }), [
    form,
    loading,
    account,
  ]);

  return (
    <Context.Accounts.ResetPasswordContext.Provider value={value}>
      {children}
    </Context.Accounts.ResetPasswordContext.Provider>
  );
};
