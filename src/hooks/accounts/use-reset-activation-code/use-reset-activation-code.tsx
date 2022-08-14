import { useContext } from "react";
import { Context } from "../../..";
import { AccountBase } from "../../../types";

export const useResetActivationCode = <Account extends AccountBase>() => {
  const context = useContext<
    Context.Accounts.IResetActivationCodeContext<Account>
  >(
    (Context.Accounts.ResetActivationCodeContext as unknown) as React.Context<
      Context.Accounts.IResetActivationCodeContext<Account>
    >
  );

  if (!context) {
    throw new Error("Reset activation code provider not found.");
  }

  return context;
};
