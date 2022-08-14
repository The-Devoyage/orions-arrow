import { FormikProps } from "formik";
import { createContext } from "react";
import { UserBase } from "../../../types";
import { InviteUserInput } from "../../../types/generated";

export interface IInviteUserContext<User extends UserBase> {
  form: FormikProps<InviteUserInput> | null;
  loading: boolean;
  user: User | null;
}

export const InviteUserContext = createContext<IInviteUserContext<UserBase>>({
  loading: false,
  form: null,
  user: null,
});
