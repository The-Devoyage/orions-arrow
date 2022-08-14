import { useQuery, DocumentNode } from "@apollo/client";
import React, { FC, ReactNode, useMemo } from "react";
import { Context } from "../../../..";

interface GetMeProvider {
  children: ReactNode;
  query: {
    documentNode: DocumentNode;
  };
}

export const GetMeProvider: FC<GetMeProvider> = ({ children, query }) => {
  const { data, loading } = useQuery(query.documentNode);

  const me = data?.me || null;

  const value = useMemo(() => ({ me, loading }), [me, loading]);

  return (
    <Context.Users.GetMeContext.Provider value={value}>
      {children}
    </Context.Users.GetMeContext.Provider>
  );
};
