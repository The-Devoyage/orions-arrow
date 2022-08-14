import { createContext } from "react";
import { FormikProps } from "formik";
import { VerifyEmailInput } from "../../../types/generated";
import { AccountBase } from "../../../types";

export interface IVerifyEmailProviderContext<Account extends AccountBase> {
  form: FormikProps<VerifyEmailInput> | null;
  loading: boolean;
  account: Account | null;
}

export const VerifyEmailProviderContext = createContext<
  IVerifyEmailProviderContext<AccountBase>
>({
  form: null,
  loading: false,
  account: null,
});
