import { createContext } from "react";
import { UserBase } from "../../../types";
import { Stats, User } from "../../../types/generated";

export interface IGetUsersContext<U extends UserBase> {
  users: U[];
  loading: boolean;
  handleFetchMore: () => void;
  handleSearch: (v: string) => void;
  stats?: Stats;
  utils: {
    getUser: (user_id: User["_id"]) => U | null;
  };
}

export const GetUsersContext = createContext<IGetUsersContext<UserBase>>({
  users: [],
  loading: false,
  handleFetchMore: () => null,
  handleSearch: () => null,
  utils: {
    getUser: () => null,
  },
});
