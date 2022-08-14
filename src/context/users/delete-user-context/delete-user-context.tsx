import { FormikProps } from "formik";
import { createContext } from "react";
import { DeleteResponse, DeleteUsersInput } from "../../../types/generated";

export interface IDeleteUserContext {
  form: FormikProps<DeleteUsersInput> | null;
  loading: boolean;
  deleted: DeleteResponse | null;
}

export const DeleteUserContext = createContext<IDeleteUserContext>({
  form: null,
  loading: false,
  deleted: null,
});
