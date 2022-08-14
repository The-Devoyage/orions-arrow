import { FormikProps } from "formik";
import { createContext } from "react";
import { MediaBase } from "../../../types";
import { CreateMediaInput } from "../../../types/generated";

export interface ICreateMeidaContext<Media extends MediaBase> {
  form: FormikProps<CreateMediaInput> | null;
  loading: boolean;
  media: Media | null;
}

export const CreateMediaContext = createContext<ICreateMeidaContext<MediaBase>>(
  {
    form: null,
    loading: false,
    media: null,
  }
);
