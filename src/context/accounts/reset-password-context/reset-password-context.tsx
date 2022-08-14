import { FormikProps } from "formik";
import { createContext } from "react";
import { AccountBase } from "../../../types";
import { ResetPasswordInput } from "../../../types/generated";

export interface IResetPasswordContext<Account extends AccountBase> {
  form: FormikProps<ResetPasswordInput> | null;
  loading: boolean;
  account: Account | null;
}

export const ResetPasswordContext = createContext<
  IResetPasswordContext<AccountBase>
>({
  form: null,
  loading: false,
  account: null,
});
