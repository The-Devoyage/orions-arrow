import { createContext } from "react";
import { MediaBase } from "../../../types";
import { Stats } from "../../../types/generated";

export interface IGetMediaContext<Media extends MediaBase> {
  media: Media[];
  loading: boolean;
  stats?: Stats;
  handleFetchMore: () => void;
  handleSearch: (v: string) => void;
  searchValue?: string;
}

export const GetMediaContext = createContext<IGetMediaContext<MediaBase>>({
  media: [],
  loading: false,
  handleFetchMore: () => null,
  handleSearch: () => null,
});
