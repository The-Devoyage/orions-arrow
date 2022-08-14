import { useContext } from "react";
import { Context } from "../../..";
import { AccountBase } from "../../../types";

export const useLoginAccount = <Account extends AccountBase>() => {
  const context = useContext<Context.Accounts.ILoginAccountContext<Account>>(
    (Context.Accounts.LoginAccountContext as unknown) as React.Context<
      Context.Accounts.ILoginAccountContext<Account>
    >
  );

  if (!context) {
    throw new Error("Login account provider not found.");
  }

  return context;
};
