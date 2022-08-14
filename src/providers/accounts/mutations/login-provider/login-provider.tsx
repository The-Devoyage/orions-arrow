import { FormikHelpers, useFormik } from "formik";
import React, { useMemo, ReactNode } from "react";
import { LoginInput } from "../../../../types/generated";
import { AccountBase, MutationBase } from "../../../../types";
import { useMutation } from "@apollo/client";
import { Context } from "../../../..";

interface LoginAccountProviderProps<Account extends AccountBase> {
  children: ReactNode;
  mutation: MutationBase<LoginInput, Account>;
}

export const LoginAccountProvider = <Account extends AccountBase>({
  children,
  mutation,
}: LoginAccountProviderProps<Account>) => {
  const [loginAccount, { data, loading, reset }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries ?? [],
    }
  );
  const account = data?.login?.account;
  const token = data?.login?.token;

  const handleLoginAccount = (
    values: LoginInput,
    helpers: FormikHelpers<LoginInput>
  ) => {
    loginAccount({
      variables: {
        loginInput: { ...values },
      },
      onCompleted: (data) =>
        mutation.onCompleted(
          { account: data?.login?.account, token: data?.login?.token },
          helpers,
          reset
        ),
      onError: (error) => mutation.onError(error, helpers, reset),
    });
  };

  const form = useFormik<LoginInput>({
    initialValues: mutation.variables ?? { email: "", password: "" },
    onSubmit: (values, helpers) => handleLoginAccount(values, helpers),
  });

  const value = useMemo(() => ({ form, loading, account, token }), [
    form,
    loading,
    account,
    token,
  ]);

  return (
    <Context.Accounts.LoginAccountContext.Provider value={value}>
      {children}
    </Context.Accounts.LoginAccountContext.Provider>
  );
};
