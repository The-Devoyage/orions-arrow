import { FormikProps } from "formik";
import { createContext } from "react";
import { UserBase } from "../../../types";
import { UpdateUserInput } from "../../../types/generated";

export interface IUpdateUserContext<User extends UserBase> {
  form: FormikProps<UpdateUserInput> | null;
  loading: boolean;
  user: User | null;
}

export const UpdateUserContext = createContext<IUpdateUserContext<UserBase>>({
  form: null,
  loading: true,
  user: null,
});
