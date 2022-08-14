import { createContext } from "react";
import { FormikProps } from "formik";
import { AccountBase } from "../../../types";
import { LoginInput } from "../../../types/generated";

export interface ILoginAccountContext<Account extends AccountBase> {
  form: FormikProps<LoginInput> | null;
  loading: boolean;
  account: Account | null;
}

export const LoginAccountContext = createContext<
  ILoginAccountContext<AccountBase>
>({
  form: null,
  loading: false,
  account: null,
});
