import { useMutation } from "@apollo/client";
import { FormikHelpers, useFormik } from "formik";
import React, { FC, ReactNode, useMemo } from "react";
import { MutationBase } from "../../../../types";
import { DeleteMediaInput, DeleteResponse } from "../../../../types/generated";
import { Context, Utils } from "../../../../";

interface DeleteMediaProviderProps {
  mutation: MutationBase<DeleteMediaInput, DeleteResponse>;
  children: ReactNode;
}

export const DeleteMediaProvider: FC<DeleteMediaProviderProps> = ({
  children,
  mutation,
}) => {
  const [deleteMedia, { loading, reset }] = useMutation(mutation.documentNode, {
    refetchQueries: ["MediasPage_GetMedia"],
  });

  const handleDeleteMeida = (
    values: DeleteMediaInput,
    helpers: FormikHelpers<DeleteMediaInput>
  ) => {
    deleteMedia({
      variables: {
        deleteMediaInput: values,
      },
      onError: (error) => mutation.onError(error, helpers, reset),
      onCompleted: (data) => mutation.onCompleted(data, helpers, reset),
    });
  };

  const form = useFormik<DeleteMediaInput>({
    initialValues: mutation.variables ?? { query: {} },
    enableReinitialize: true,
    onSubmit: handleDeleteMeida,
    validationSchema: Utils.Validations.Media.DeleteMediaInput,
  });

  const value = useMemo(
    () => ({
      form,
      loading,
    }),
    [form, loading]
  );

  return (
    <Context.Media.DeleteMediaContext.Provider value={value}>
      {children}
    </Context.Media.DeleteMediaContext.Provider>
  );
};
