import { useContext } from "react";
import { Context } from "../../../";

export const useDeleteMedia = () => {
  const context = useContext<Context.Media.IDeleteMediaContext>(
    (Context.Media
      .DeleteMediaContext as unknown) as React.Context<Context.Media.IDeleteMediaContext>
  );

  if (!context) {
    throw new Error("Delete media provider not found");
  }

  return context;
};
