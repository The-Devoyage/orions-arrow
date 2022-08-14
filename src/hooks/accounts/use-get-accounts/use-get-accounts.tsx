import { useContext } from "react";
import { AccountBase } from "../../../types";
import { Context } from "../../..";

export const useGetAccountsContext = <A extends AccountBase>() => {
  const context = useContext<Context.Accounts.IGetAccountsContext<A>>(
    (Context.Accounts.GetAccountsContext as unknown) as React.Context<
      Context.Accounts.IGetAccountsContext<A>
    >
  );

  if (!context) {
    throw Error("No Context Provider.");
  }

  return context;
};
