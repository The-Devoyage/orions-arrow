import { useMutation } from "@apollo/client";
import { FormikHelpers, useFormik } from "formik";
import React, { FC, ReactNode, useMemo } from "react";
import { MutationBase } from "../../../../types";
import { DeleteResponse, DeleteUsersInput } from "../../../../types/generated";
import { Context, Utils } from "../../../../";

export interface DeleteUserProviderProps {
  mutation: MutationBase<DeleteUsersInput, DeleteResponse>;
  children: ReactNode;
}

export const DeleteUserProvider: FC<DeleteUserProviderProps> = ({
  children,
  mutation,
}) => {
  const [deleteUser, { loading, reset, data }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );
  const deleted = data?.deleteUsers;

  const handleDeleteUserProvider = (
    values: DeleteUsersInput,
    helpers: FormikHelpers<DeleteUsersInput>
  ) => {
    deleteUser({
      variables: {
        deleteUsersInput: { ...values },
      },
      onCompleted: (data) => mutation.onCompleted(data, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
    });
  };

  const form = useFormik({
    initialValues: mutation.variables ?? { query: {} },
    onSubmit: handleDeleteUserProvider,
    validationSchema: Utils.Validations.Users.DeleteUserInput,
  });

  const value = useMemo(() => ({ form, loading, deleted }), [
    form,
    loading,
    deleted,
  ]);

  return (
    <Context.Users.DeleteUserContext.Provider value={value}>
      {children}
    </Context.Users.DeleteUserContext.Provider>
  );
};
