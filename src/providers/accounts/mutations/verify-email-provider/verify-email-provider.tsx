import { FormikHelpers, useFormik } from "formik";
import React, { useMemo, ReactNode } from "react";
import { VerifyEmailInput } from "../../../../types/generated";
import { useMutation } from "@apollo/client";
import { AccountBase, MutationBase } from "../../../../types";
import { Context } from "../../../../";

interface VerifyEmailProviderProps<Account extends AccountBase> {
  children: ReactNode;
  mutation: MutationBase<VerifyEmailInput, Account>;
}

export const VerifyEmailProvider = <Account extends AccountBase>({
  children,
  mutation,
}: VerifyEmailProviderProps<Account>) => {
  const [verifyEmail, { data, loading, reset }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );

  const account = data?.verifyEmail;

  const handleVerifyEmail = (
    values: VerifyEmailInput,
    helpers: FormikHelpers<VerifyEmailInput>
  ) => {
    verifyEmail({
      variables: {
        verifyEmailInput: { ...values },
      },
      onCompleted: (data) =>
        mutation.onCompleted(data?.verifyEmail, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
    });
  };

  const form = useFormik<VerifyEmailInput>({
    initialValues: mutation.variables ?? {
      email: "",
      code: "",
    },
    onSubmit: handleVerifyEmail,
  });

  const value = useMemo(() => ({ form, loading, account }), [
    form,
    loading,
    account,
  ]);

  return (
    <Context.Accounts.VerifyEmailProviderContext.Provider value={value}>
      {children}
    </Context.Accounts.VerifyEmailProviderContext.Provider>
  );
};
