import { FormikProps } from "formik";
import { createContext } from "react";
import { AccountBase } from "../../../types";
import { ResetPasswordInput } from "../../../types/generated";

export interface IResetPasswordProviderContext<Account extends AccountBase> {
  form: FormikProps<ResetPasswordInput> | null;
  loading: boolean;
  account: Account | null;
}

export const ResetPasswordProviderContext = createContext<
  IResetPasswordProviderContext<AccountBase>
>({
  form: null,
  loading: false,
  account: null,
});
