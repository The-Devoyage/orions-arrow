import { useContext } from "react";
import { Context } from "../../..";
import { UserBase } from "../../../types";

export const useLoginUserContext = <User extends UserBase>() => {
  const context = useContext<Context.Users.ILoginUserContext<User>>(
    (Context.Users.LoginUserContext as unknown) as React.Context<
      Context.Users.ILoginUserContext<User>
    >
  );

  if (!context) {
    throw new Error("Login user provider not found.");
  }

  return context;
};
