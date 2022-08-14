import React, { ReactNode, useMemo } from "react";
import { FormikHelpers, useFormik } from "formik";
import { UpdateUserInput } from "../../../../types/generated";
import { MutationBase, UserBase } from "../../../../types";
import { useMutation } from "@apollo/client";
import { Context } from "../../../../";

export interface UpdateUserProviderProps<User extends UserBase> {
  children: ReactNode;
  mutation: MutationBase<UpdateUserInput, User>;
}

export const UpdateUserProvider = <User extends UserBase>({
  children,
  mutation,
}: UpdateUserProviderProps<User>) => {
  const [updateUser, { loading, reset, data }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );
  const user = data?.updateUser ?? null;

  const handleUpdateUser = (
    values: UpdateUserInput,
    helpers: FormikHelpers<UpdateUserInput>
  ) => {
    updateUser({
      variables: {
        updateUserInput: {
          ...values,
        },
      },
      onCompleted: (data) =>
        mutation.onCompleted(data?.updateUser, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
    });
  };

  const form = useFormik({
    onSubmit: handleUpdateUser,
    initialValues: mutation.variables ?? { query: {}, payload: {} },
    enableReinitialize: true,
  });

  const value = useMemo(() => {
    return {
      form,
      loading,
      user,
    };
  }, [form, loading, user]);

  return (
    <Context.Users.UpdateUserContext.Provider value={value}>
      {children}
    </Context.Users.UpdateUserContext.Provider>
  );
};
