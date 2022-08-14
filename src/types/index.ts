import { FormikHelpers } from "formik";
import { Account, User } from "./generated";
import { DocumentNode, ApolloError } from "@apollo/client";

export type AccountBase = DeepPartial<Account>;
export type UserBase = DeepPartial<User>;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export interface QueryBase<T extends Record<string, unknown>> {
  documentNode: DocumentNode;
  variables: T;
}

export interface MutationBase<
  T extends Record<string, unknown>,
  ReturnType extends Record<string, unknown>
> {
  documentNode: DocumentNode;
  variables?: T;
  refetchQueries?: { query: DocumentNode }[];
  //TODO: Can not return "account"
  onCompleted: (
    data: { account: ReturnType; token: string },
    helpers: FormikHelpers<T>,
    reset: () => void
  ) => void;
  onError: (
    error: ApolloError,
    helpers: FormikHelpers<T>,
    reset: () => void
  ) => void;
}
