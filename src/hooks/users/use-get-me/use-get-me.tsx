import { Context } from "../../../";
import { useContext } from "react";
import { UserBase } from "../../../types";

export const useGetMe = <User extends UserBase>() => {
  const context = useContext<Context.Users.IGetMeContext<User>>(
    (Context.Users.GetMeContext as unknown) as React.Context<
      Context.Users.IGetMeContext<User>
    >
  );

  if (!context) {
    throw new Error("Failed to find provider.");
  }

  return context;
};
