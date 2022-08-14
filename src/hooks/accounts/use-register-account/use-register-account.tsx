import { useContext } from "react";
import { AccountBase } from "../../../types";
import { Context } from "../../..";

export const useRegisterAccountContext = <Account extends AccountBase>() => {
  const context = useContext<
    Context.Accounts.IRegisterAccountProviderContext<Account>
  >(
    (Context.Accounts
      .RegisterAccountProviderContext as unknown) as React.Context<
      Context.Accounts.IRegisterAccountProviderContext<Account>
    >
  );

  if (!context) {
    throw new Error("Register account provider not found.");
  }

  return context;
};
