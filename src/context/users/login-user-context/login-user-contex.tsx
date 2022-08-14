import { FormikProps } from "formik";
import { createContext } from "react";
import { UserBase } from "../../../types";

export interface ILoginUserContext<User extends UserBase> {
  form: FormikProps<{}> | null;
  user: User | null;
  token: string | null;
}

export const LoginUserContext = createContext<ILoginUserContext<UserBase>>({
  form: null,
  user: null,
  token: null,
});
