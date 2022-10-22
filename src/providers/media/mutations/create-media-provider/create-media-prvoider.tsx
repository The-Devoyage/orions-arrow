import { useMutation } from "@apollo/client";
import { FormikHelpers, useFormik } from "formik";
import React, { ReactNode, useMemo } from "react";
import { MediaBase, MutationBase } from "../../../../types";
import { CreateMediaInput } from "../../../../types/generated";
import { Context, Utils } from "../../../../";

interface CreateMediaProviderProps<Media extends MediaBase> {
  mutation: MutationBase<CreateMediaInput, Media>;
  children: ReactNode;
}

export const CreateMediaProvider = <Media extends MediaBase>({
  children,
  mutation,
}: CreateMediaProviderProps<Media>) => {
  const [createMeida, { loading, reset, data }] = useMutation(
    mutation.documentNode,
    {
      refetchQueries: mutation.refetchQueries,
    }
  );
  const media = data?.createMedia.media ?? null;

  const handleCreateMedia = (
    values: CreateMediaInput,
    helpers: FormikHelpers<CreateMediaInput>
  ) => {
    createMeida({
      variables: {
        createMediaInput: {
          ...values,
        },
      },
      refetchQueries: mutation.refetchQueries,
      onCompleted: (data) =>
        mutation.onCompleted(data?.createMedia.data, helpers, reset),
      onError: (error) => mutation.onError(error, helpers, reset),
    });
  };

  const form = useFormik<CreateMediaInput>({
    initialValues: mutation.variables ?? { payload: [] },
    enableReinitialize: true,
    onSubmit: handleCreateMedia,
    validationSchema: Utils.Validations.Media.CreateMediaInput,
    // validateOnBlur: false,
    // validateOnChange: false,
  });

  const value = useMemo(
    () => ({
      form,
      loading,
      media,
    }),
    [form, loading, media]
  );

  return (
    <Context.Media.CreateMediaContext.Provider value={value}>
      {children}
    </Context.Media.CreateMediaContext.Provider>
  );
};
