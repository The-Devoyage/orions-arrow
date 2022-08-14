import { FormikProps } from "formik";
import { createContext } from "react";
import { UserBase } from "../../../types";
import { CreateUserInput } from "../../../types/generated";

export interface ICreateUserContext<User extends UserBase> {
  form: FormikProps<CreateUserInput> | null;
  loading: boolean;
  user: User | null;
}

export const CreateUserContext = createContext<ICreateUserContext<UserBase>>({
  form: null,
  loading: true,
  user: null,
});
