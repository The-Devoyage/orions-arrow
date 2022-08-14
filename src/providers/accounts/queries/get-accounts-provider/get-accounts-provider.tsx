import { useQuery } from "@apollo/client";
import React, { FC, useMemo, ReactNode } from "react";
import { Utils } from "../../../..";
import {
  GetAccountsInput,
  GetUsersInput,
  StringFilterByEnum,
  Account,
} from "../../../../types/generated";
import { Context } from "../../../..";
import { QueryBase } from "../../../../types";

interface GetAccountsProviderProps {
  children: ReactNode;
  query: QueryBase<{
    getAccountsInput: GetAccountsInput;
    getUsersInput?: GetUsersInput;
  }>;
}

export const GetAccountsProvider: FC<GetAccountsProviderProps> = ({
  children,
  query,
}) => {
  const { data, loading, fetchMore, refetch } = useQuery(query.documentNode, {
    variables: query.variables,
    notifyOnNetworkStatusChange: true,
  });

  const value = useMemo(() => {
    const accounts: Account[] = data?.getAccounts.data ?? [];

    const stats = data?.getAccounts.stats;

    const getAccount = (account_id: Account["_id"]) =>
      Utils.Accounts.getAccount(account_id, accounts);

    const getAccountUsers = (account_id: Account["_id"]) =>
      Utils.Accounts.getAccountUsers(account_id, accounts);

    const getDefaultUser = (account_id: Account["_id"]) =>
      Utils.Accounts.getDefaultUser(account_id, accounts);

    const handleFetchMore = () =>
      fetchMore({
        variables: {
          getUsersInput: {
            ...query.variables.getUsersInput,
          },
          getAccountsInput: {
            ...query.variables.getAccountsInput,
            config: {
              ...query.variables.getAccountsInput.config,
              pagination: {
                ...query.variables.getAccountsInput.config?.pagination,
                createdAt: stats.cursor,
              },
            },
          },
        },
      });

    const handleSearch = (v: string) => {
      if (v) {
        const isId = Utils.Common.isValidObjectId(v);

        let _id;
        if (isId) {
          _id = [{ string: v, filterBy: StringFilterByEnum.Objectid }];
        }

        refetch({
          getUsersInput: query.variables.getUsersInput,
          getAccountsInput: {
            query: {
              _id,
              email: [{ string: v, filterBy: StringFilterByEnum.Regex }],
            },
          },
        });
      } else {
        refetch({
          getAccountsInput: {
            ...query.variables.getAccountsInput,
            config: {
              ...query.variables.getAccountsInput.config,
              pagination: {
                ...query.variables.getAccountsInput.config?.pagination,
              },
            },
          },
          getUsersInput: query.variables.getUsersInput,
        });
      }
    };

    return {
      accounts,
      loading,
      stats,
      handleFetchMore,
      handleSearch,
      utils: {
        getAccount,
        getAccountUsers,
        getDefaultUser,
      },
    };
  }, [loading, data]);

  return (
    <Context.Accounts.GetAccountsContext.Provider value={value}>
      {children}
    </Context.Accounts.GetAccountsContext.Provider>
  );
};
