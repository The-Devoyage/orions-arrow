import { FormikHelpers, useFormik } from "formik";
import React, { useMemo, ReactNode } from "react";
import { ResetCodeInput } from "../../../../types/generated";
import { useMutation } from "@apollo/client";
import { AccountBase, MutationBase } from "../../../../types";
import { Context, Utils } from "../../../..";

interface ResetActivationCodeProviderProps<Account extends AccountBase> {
  children: ReactNode;
  mutation: MutationBase<ResetCodeInput, Account>;
}

export const ResetActivationCodeProvider = <Account extends AccountBase>({
  children,
  mutation,
}: ResetActivationCodeProviderProps<Account>) => {
  const [resetCode, { data, loading, reset }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );
  const account = data?.resetCode;

  const handleRegisterAccount = (
    values: ResetCodeInput,
    helpers: FormikHelpers<ResetCodeInput>
  ) => {
    resetCode({
      variables: {
        resetCodeInput: { ...values },
      },
      onCompleted: (data) => mutation.onCompleted(data, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
    });
  };

  const form = useFormik<ResetCodeInput>({
    initialValues: mutation.variables ?? {
      email: "",
    },
    onSubmit: handleRegisterAccount,
    enableReinitialize: true,
    validationSchema: Utils.Validations.Accounts.ResetCodeInput,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const value = useMemo(() => ({ form, loading, account }), [
    form,
    loading,
    account,
  ]);

  return (
    <Context.Accounts.ResetActivationCodeContext.Provider value={value}>
      {children}
    </Context.Accounts.ResetActivationCodeContext.Provider>
  );
};
