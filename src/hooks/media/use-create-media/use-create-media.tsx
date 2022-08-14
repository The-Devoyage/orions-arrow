import { useContext } from "react";
import { MediaBase } from "../../../types";
import { Context } from "../../../";

export const useCreateMedia = <Media extends MediaBase>() => {
  const context = useContext<Context.Media.ICreateMeidaContext<Media>>(
    (Context.Media.CreateMediaContext as unknown) as React.Context<
      Context.Media.ICreateMeidaContext<Media>
    >
  );

  if (!context) {
    throw new Error("Create media provider not found.");
  }

  return context;
};
