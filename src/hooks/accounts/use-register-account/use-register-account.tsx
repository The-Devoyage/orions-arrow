import { useContext } from "react";
import { AccountBase } from "../../../types";
import { Context } from "../../..";

export const useRegisterAccount = <Account extends AccountBase>() => {
  const context = useContext<Context.Accounts.IRegisterAccountContext<Account>>(
    (Context.Accounts.RegisterAccountContext as unknown) as React.Context<
      Context.Accounts.IRegisterAccountContext<Account>
    >
  );

  if (!context) {
    throw new Error("Register account provider not found.");
  }

  return context;
};
