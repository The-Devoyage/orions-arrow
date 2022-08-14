import { createContext } from "react";
import { FormikProps } from "formik";
import { VerifyEmailInput } from "../../../types/generated";
import { AccountBase } from "../../../types";

export interface IVerifyEmailContext<Account extends AccountBase> {
  form: FormikProps<VerifyEmailInput> | null;
  loading: boolean;
  account: Account | null;
}

export const VerifyEmailContext = createContext<
  IVerifyEmailContext<AccountBase>
>({
  form: null,
  loading: false,
  account: null,
});
