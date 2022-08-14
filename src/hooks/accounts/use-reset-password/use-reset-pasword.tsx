import { useContext } from "react";
import { AccountBase } from "../../../types";
import { Context } from "../../../";

export const useResetAccountPassword = <Account extends AccountBase>() => {
  const context = useContext<Context.Accounts.IResetPasswordContext<Account>>(
    (Context.Accounts.ResetPasswordContext as unknown) as React.Context<
      Context.Accounts.IResetPasswordContext<Account>
    >
  );

  if (!context) {
    throw new Error("Reset account provider not found.");
  }

  return context;
};
