import React, { ReactNode, useMemo } from "react";
import { MutationBase, UserBase } from "../../../../types";
import { useMutation } from "@apollo/client";
import { FormikHelpers, useFormik } from "formik";
import { Context } from "../../../../";

interface LoginUserProviderProps<User extends UserBase> {
  children: ReactNode;
  mutation: MutationBase<Record<string, never>, { user: User; token: string }>;
}

export const LoginUserProvider = <User extends UserBase>({
  children,
  mutation,
}: LoginUserProviderProps<User>) => {
  const [loginUser, { data, reset, loading }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );
  const user = data?.loginUser.user ?? null;
  const token = data?.loginUser.token ?? null;

  const handleLoginUser = (
    _: Record<string, never>,
    helpers: FormikHelpers<Record<string, never>>
  ) => {
    loginUser({
      onCompleted: (data) =>
        mutation.onCompleted(data?.loginUser, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
    });
  };

  const form = useFormik<Record<string, never>>({
    initialValues: {},
    onSubmit: handleLoginUser,
    enableReinitialize: true,
  });

  const value = useMemo(() => ({ loading, user, token, form }), [
    loading,
    user,
    token,
  ]);

  return (
    <Context.Users.LoginUserContext.Provider value={value}>
      {children}
    </Context.Users.LoginUserContext.Provider>
  );
};
