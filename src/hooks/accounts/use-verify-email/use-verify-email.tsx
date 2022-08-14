import { useContext } from "react";
import { Context } from "../../../";
import { AccountBase } from "../../../types";

export const useVerifyAccountEmailContext = <Account extends AccountBase>() => {
  const context = useContext<
    Context.Accounts.IVerifyEmailProviderContext<Account>
  >(
    (Context.Accounts.VerifyEmailProviderContext as unknown) as React.Context<
      Context.Accounts.IVerifyEmailProviderContext<Account>
    >
  );

  if (!context) {
    throw new Error("Verify account email provider not found.");
  }

  return context;
};
