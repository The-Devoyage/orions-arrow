import { useContext } from "react";
import { AccountBase } from "../../../types";
import { Context } from "../../../";

export const useResetAccountPasswordContext = <
  Account extends AccountBase
>() => {
  const context = useContext<
    Context.Accounts.IResetPasswordProviderContext<Account>
  >(
    (Context.Accounts.ResetPasswordProviderContext as unknown) as React.Context<
      Context.Accounts.IResetPasswordProviderContext<Account>
    >
  );

  if (!context) {
    throw new Error("Reset account provider not found.");
  }

  return context;
};
