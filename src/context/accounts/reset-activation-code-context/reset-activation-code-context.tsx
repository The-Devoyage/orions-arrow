import { FormikProps } from "formik";
import { createContext } from "react";
import { AccountBase } from "../../../types";
import { ResetCodeInput } from "../../../types/generated";

export interface IResetActivationCodeProviderContext<
  Account extends AccountBase
> {
  form: FormikProps<ResetCodeInput> | null;
  loading: boolean;
  account: Account | null;
}

export const ResetActivationCodeProviderContext = createContext<
  IResetActivationCodeProviderContext<AccountBase>
>({
  form: null,
  loading: false,
  account: null,
});
