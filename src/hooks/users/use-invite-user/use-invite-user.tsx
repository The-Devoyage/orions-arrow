import { useContext } from "react";
import { Context } from "../../..";
import { UserBase } from "../../../types";

export const useInviteUserContext = <User extends UserBase>() => {
  const context = useContext<Context.Users.IInviteUserContext<User>>(
    (Context.Users.InviteUserContext as unknown) as React.Context<
      Context.Users.IInviteUserContext<User>
    >
  );

  if (!context) {
    throw new Error("Invite user provider not found");
  }

  return context;
};
