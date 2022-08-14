import { useContext } from "react";
import { Context } from "../../..";
import { UserBase } from "../../../types";

export const useCreateUser = <User extends UserBase>() => {
  const context = useContext<Context.Users.ICreateUserContext<User>>(
    (Context.Users.CreateUserContext as unknown) as React.Context<
      Context.Users.ICreateUserContext<User>
    >
  );

  if (!context) {
    throw new Error("Create user provider not found.");
  }

  return context;
};
