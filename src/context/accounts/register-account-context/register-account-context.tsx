import { FormikProps } from "formik";
import { AccountBase } from "../../../types";
import { RegisterInput } from "../../../types/generated";
import { createContext } from "react";

export interface IRegisterAccountContext<Account extends AccountBase> {
  form: FormikProps<RegisterInput> | null;
  loading: boolean;
  account: Account | null;
}

export const RegisterAccountContext = createContext<
  IRegisterAccountContext<AccountBase>
>({
  form: null,
  loading: false,
  account: null,
});
