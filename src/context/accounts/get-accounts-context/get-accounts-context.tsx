import { createContext } from "react";
import { AccountBase } from "../../../types";
import { Stats, Account } from "../../../types/generated";

export interface IGetAccountsContext<A extends AccountBase> {
  accounts: A[];
  loading: boolean;
  handleFetchMore: () => void;
  handleSearch: (v: string) => void;
  stats?: Stats;
  utils: {
    getAccount: (account_id: Account["_id"]) => A | null;
    getAccountUsers: (
      account_id: Account["_id"]
    ) => NonNullable<A["users"]>["data"] | null;
    getDefaultUser: (
      account_id: Account["_id"]
    ) => NonNullable<NonNullable<A["users"]>["data"]>[0] | null;
  };
}

export const GetAccountsContext = createContext<
  IGetAccountsContext<AccountBase>
>({
  accounts: [],
  loading: false,
  handleFetchMore: () => null,
  handleSearch: () => null,
  utils: {
    getAccount: () => null,
    getDefaultUser: () => null,
    getAccountUsers: () => null,
  },
});
