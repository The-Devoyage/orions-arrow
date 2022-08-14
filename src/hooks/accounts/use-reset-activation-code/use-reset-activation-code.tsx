import { useContext } from "react";
import { Context } from "../../..";
import { AccountBase } from "../../../types";

export const useResetActivationCodeContext = <
  Account extends AccountBase
>() => {
  const context = useContext<
    Context.Accounts.IResetActivationCodeProviderContext<Account>
  >(
    (Context.Accounts
      .ResetActivationCodeProviderContext as unknown) as React.Context<
      Context.Accounts.IResetActivationCodeProviderContext<Account>
    >
  );

  if (!context) {
    throw new Error("Reset activation code provider not found.");
  }

  return context;
};
