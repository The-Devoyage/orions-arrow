import React, { useMemo, ReactNode } from "react";
import { FormikHelpers, useFormik } from "formik";
import { CreateUserInput } from "../../../../types/generated";
import { useMutation } from "@apollo/client";
import { MutationBase, UserBase } from "../../../../types";
import { Context, Utils } from "../../../..";

interface CreateUserProviderProps<User extends UserBase> {
  children: ReactNode;
  mutation: MutationBase<CreateUserInput, User>;
}

export const CreateUserProvider = <User extends UserBase>({
  mutation,
  children,
}: CreateUserProviderProps<User>) => {
  const [createUser, { loading, reset, data }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );

  const user = data?.createUser ?? null;

  const handleCreateUser = (
    values: CreateUserInput,
    helpers: FormikHelpers<CreateUserInput>
  ) => {
    createUser({
      variables: {
        createUserInput: {
          ...values,
        },
      },
      onCompleted: (data) =>
        mutation.onCompleted(data?.createUser, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
      refetchQueries: mutation.refetchQueries ?? [],
    });
  };

  const form = useFormik<CreateUserInput>({
    initialValues: mutation.variables ?? { payload: {} },
    onSubmit: handleCreateUser,
    enableReinitialize: true,
    validationSchema: Utils.Validations.Users.CreateUserInput,
  });

  const value = useMemo(
    () => ({
      form,
      loading,
      user,
    }),
    [form, loading, user]
  );

  return (
    <Context.Users.CreateUserContext.Provider value={value}>
      {children}
    </Context.Users.CreateUserContext.Provider>
  );
};
