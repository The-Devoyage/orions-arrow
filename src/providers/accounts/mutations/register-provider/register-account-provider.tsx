import { FormikHelpers, useFormik } from "formik";
import React, { useMemo, ReactNode } from "react";
import { RegisterInput } from "../../../../types/generated";
import { useMutation } from "@apollo/client";
import { AccountBase, MutationBase } from "../../../../types";
import { Context } from "../../../../";

interface RegisterAccountProviderProps<Account extends AccountBase> {
  children: ReactNode;
  mutation: MutationBase<RegisterInput, Account>;
}

export const RegisterAccontProvider = <Account extends AccountBase>({
  children,
  mutation,
}: RegisterAccountProviderProps<Account>) => {
  const [registerAccount, { loading, reset, data }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );
  const account = data?.register;

  const handleRegisterAccount = (
    values: RegisterInput,
    helpers: FormikHelpers<RegisterInput>
  ) => {
    registerAccount({
      variables: {
        registerInput: { ...values },
      },
      onCompleted: (data) =>
        mutation.onCompleted(data?.register, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
      refetchQueries: mutation.refetchQueries ?? [],
    });
  };

  const form = useFormik<RegisterInput>({
    initialValues: mutation.variables ?? {
      email: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: handleRegisterAccount,
  });

  const value = useMemo(
    () => ({
      form,
      loading,
      account,
    }),
    [loading, form, account]
  );

  return (
    <Context.Accounts.RegisterAccountContext.Provider value={value}>
      {children}
    </Context.Accounts.RegisterAccountContext.Provider>
  );
};
