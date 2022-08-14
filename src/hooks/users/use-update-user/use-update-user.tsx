import { useContext } from "react";
import { Context } from "../../..";
import { UserBase } from "../../../types";

export const useUpdateUserContext = <User extends UserBase>() => {
  const context = useContext<Context.Users.IUpdateUserContext<User>>(
    (Context.Users.UpdateUserContext as unknown) as React.Context<
      Context.Users.IUpdateUserContext<User>
    >
  );

  if (!context) {
    throw new Error("Update user provider not found.");
  }

  return context;
};
