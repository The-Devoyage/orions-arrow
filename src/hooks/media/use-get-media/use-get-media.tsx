import { MediaBase } from "../../../types";
import { useContext } from "react";
import { Context } from "../../../";

export const useGetMediaContext = <Media extends MediaBase>() => {
  const context = useContext<Context.Media.IGetMediaContext<Media>>(
    (Context.Media.GetMediaContext as unknown) as React.Context<
      Context.Media.IGetMediaContext<Media>
    >
  );

  if (!context) {
    throw Error("Get media provider not found.");
  }

  return context;
};
