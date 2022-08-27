import { FormikHelpers } from "formik";
import { Account, User, Media } from "./generated";
import { DocumentNode, ApolloError } from "@apollo/client";
import { AnySchema } from "yup";

export type AccountBase = DeepPartial<Account>;
export type UserBase = DeepPartial<User>;
export type MediaBase = DeepPartial<Media>;

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
  refetchQueries?: string[];
  onCompleted: (
    data: ReturnType,
    helpers: FormikHelpers<T>,
    reset: () => void
  ) => void;
  onError: (
    error: ApolloError,
    helpers: FormikHelpers<T>,
    reset: () => void
  ) => void;
}

export type Shape<Fields extends Record<string, unknown>> = {
  [Key in keyof Fields]: AnySchema;
};
