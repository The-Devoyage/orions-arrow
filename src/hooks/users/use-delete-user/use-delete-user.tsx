import { useContext } from "react";
import { Context } from "../../..";

export const useDeleteUser = () => {
  const context = useContext<Context.Users.IDeleteUserContext>(
    (Context.Users
      .DeleteUserContext as unknown) as React.Context<Context.Users.IDeleteUserContext>
  );

  if (!context) {
    throw new Error("Delete user provider not found.");
  }

  return context;
};
