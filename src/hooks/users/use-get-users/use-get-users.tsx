import { useContext } from "react";
import { Context } from "../../../";
import { UserBase } from "../../../types";

export const useGetUsers = <U extends UserBase>() => {
  const context = useContext<Context.Users.IGetUsersContext<U>>(
    (Context.Users.GetUsersContext as unknown) as React.Context<
      Context.Users.IGetUsersContext<U>
    >
  );

  if (!context) {
    throw new Error("Get users context provider not found.");
  }

  return context;
};
