import { createContext } from "react";
import { FormikProps } from "formik";
import { DeleteMediaInput } from "../../../types/generated";

export interface IDeleteMediaContext {
  form: FormikProps<DeleteMediaInput> | null;
  loading: boolean;
}

export const DeleteMediaContext = createContext<IDeleteMediaContext>({
  form: null,
  loading: false,
});
