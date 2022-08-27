import { DocumentNode, useQuery } from "@apollo/client";
import React, { FC, ReactNode, useMemo } from "react";
import { Context, Utils } from "../../../..";
import {
  GetUsersInput,
  StringFilterByEnum,
  User,
} from "../../../../types/generated";

interface GetUsersProviderProps {
  children: ReactNode;
  query: {
    documentNode: DocumentNode;
    variables: {
      getUsersInput: GetUsersInput;
      membershipsAccountUsersInput?: GetUsersInput;
    };
  };
}

export const GetUsersProvider: FC<GetUsersProviderProps> = ({
  children,
  query,
}) => {
  const { data, loading, fetchMore, refetch } = useQuery(query.documentNode, {
    variables: query.variables,
    notifyOnNetworkStatusChange: true,
  });

  const users: User[] = data?.getUsers.data ?? [];
  const stats = data?.getUsers.stats;

  const value = useMemo(() => {
    const getUser = (user_id: User["_id"]) =>
      Utils.Helpers.Users.getUser(user_id, users);

    const handleFetchMore = () => {
      fetchMore({
        variables: {
          getUsersInput: {
            ...query.variables.getUsersInput,
            config: {
              pagination: {
                ...query.variables.getUsersInput.config?.pagination,
                createdAt: data?.getUsers.stats.cursor,
              },
            },
          },
        },
      });
    };

    const handleSearch = (v: string) => {
      if (v) {
        const keyWords = v.split(" ").filter((k) => k !== "");

        const _id = [];

        for (const k of keyWords) {
          if (Utils.Common.isValidObjectId(k)) {
            _id.push({ string: k, filterBy: StringFilterByEnum.Objectid });
          }
        }

        if (keyWords.length > 0 && keyWords[0] !== "") {
          refetch({
            getUsersInput: {
              query: {
                _id,
                email: keyWords.map((k) => ({
                  string: k,
                  filterBy: StringFilterByEnum.Regex,
                })),
                first_name: keyWords.map((k) => ({
                  string: k,
                  filterBy: StringFilterByEnum.Regex,
                })),
                last_name: keyWords.map((k) => ({
                  string: k,
                  filterBy: StringFilterByEnum.Regex,
                })),
                phone: keyWords.map((k) => ({
                  string: k,
                  filterBy: StringFilterByEnum.Regex,
                })),
              },
            },
          });
        }
      } else {
        refetch({
          getUsersInput: query.variables.getUsersInput,
        });
      }
    };

    return {
      users,
      loading,
      stats,
      handleFetchMore,
      handleSearch,
      utils: { getUser },
    };
  }, [loading, users]);

  return (
    <Context.Users.GetUsersContext.Provider value={value}>
      {children}
    </Context.Users.GetUsersContext.Provider>
  );
};
