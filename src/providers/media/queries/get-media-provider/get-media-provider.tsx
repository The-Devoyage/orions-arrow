import { useQuery } from "@apollo/client";
import React, { FC, ReactNode, useMemo, useState } from "react";
import { Utils } from "../../../../";
import { QueryBase } from "../../../../types";
import { GetMediaInput, StringFilterByEnum } from "../../../../types/generated";
import { Context } from "../../../../";

interface GetMediaProviderProps {
  children: ReactNode;
  query: QueryBase<{ getMediaInput: GetMediaInput }>;
}

export const GetMediaProvider: FC<GetMediaProviderProps> = ({
  children,
  query,
}) => {
  const [searchValue, setSearchValue] = useState<string | undefined>();
  const { data, loading, fetchMore, refetch } = useQuery(query.documentNode, {
    variables: query.variables,
    notifyOnNetworkStatusChange: true,
  });
  const media = data?.getMedia.data ?? [];
  const stats = data?.getMedia.stats;

  const handleSearch = (v: string) => {
    if (v) {
      setSearchValue(v);
      const keyWords = v.split(" ").filter((k) => k !== "");

      const _id = [];
      const created_by = [];

      for (const k of keyWords) {
        if (Utils.Common.isValidObjectId(k)) {
          _id.push({ string: k, filterBy: StringFilterByEnum.Objectid });
          created_by.push({ string: k, filterBy: StringFilterByEnum.Objectid });
        }
      }

      if (keyWords.length > 0 && keyWords[0] !== "") {
        refetch({
          getMediaInput: {
            query: {
              _id,
              path: keyWords.map((k) => ({
                string: k,
                filterBy: StringFilterByEnum.Regex,
              })),
              title: keyWords.map((k) => ({
                string: k,
                filterBy: StringFilterByEnum.Regex,
              })),
              mimetype: keyWords.map((k) => ({
                string: k,
                filterBy: StringFilterByEnum.Regex,
              })),
              created_by,
            },
          },
        });
      }
    } else {
      setSearchValue(undefined);
      refetch({
        getMediaInput: query.variables.getMediaInput,
      });
    }
  };
  const handleFetchMore = () => {
    fetchMore({
      variables: {
        getMediaInput: {
          ...query.variables.getMediaInput,
          config: {
            pagination: {
              ...query.variables.getMediaInput.config?.pagination,
              createdAt: stats.cursor,
            },
          },
        },
      },
    });
  };

  const value = useMemo(() => {
    return {
      media,
      loading,
      stats,
      handleFetchMore,
      handleSearch,
      searchValue,
    };
  }, [media, loading, stats, handleSearch, searchValue]);

  return (
    <Context.Media.GetMediaContext.Provider value={value}>
      {children}
    </Context.Media.GetMediaContext.Provider>
  );
};
