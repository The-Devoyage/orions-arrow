import React, { ReactNode, useMemo } from "react";
import { FormikHelpers, useFormik } from "formik";
import { InviteUserInput } from "../../../../types/generated";
import { MutationBase, UserBase } from "../../../../types";
import { useMutation } from "@apollo/client";
import { Utils, Context } from "../../../../";

export interface InviteUserProviderProps<User extends UserBase> {
  children: ReactNode;
  mutation: MutationBase<InviteUserInput, User>;
}

export const InviteUserProvider = <User extends UserBase>({
  children,
  mutation,
}: InviteUserProviderProps<User>) => {
  const [inviteUser, { loading, reset, data }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );
  const user = data?.inviteUser ?? null;

  const handleInviteUser = (
    values: InviteUserInput,
    helpers: FormikHelpers<InviteUserInput>
  ) => {
    const payload = Utils.Common.removeUnusedProperties<InviteUserInput>(
      values
    );

    inviteUser({
      variables: {
        inviteUserInput: {
          ...payload,
        },
      },
      onCompleted: (data) =>
        mutation.onCompleted(data?.inviteUser, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
    });
  };

  const form = useFormik({
    onSubmit: handleInviteUser,
    initialValues: mutation.variables ?? { query: {}, payload: {} },
    enableReinitialize: true,
    validationSchema: Utils.Validations.Users.InviteUserInput,
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
    <Context.Users.InviteUserContext.Provider value={value}>
      {children}
    </Context.Users.InviteUserContext.Provider>
  );
};
