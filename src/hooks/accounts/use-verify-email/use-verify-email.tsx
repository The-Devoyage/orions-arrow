import { useContext } from "react";
import { Context } from "../../../";
import { AccountBase } from "../../../types";

export const useVerifyAccountEmail = <Account extends AccountBase>() => {
  const context = useContext<Context.Accounts.IVerifyEmailContext<Account>>(
    (Context.Accounts.VerifyEmailContext as unknown) as React.Context<
      Context.Accounts.IVerifyEmailContext<Account>
    >
  );

  if (!context) {
    throw new Error("Verify account email provider not found.");
  }

  return context;
};
