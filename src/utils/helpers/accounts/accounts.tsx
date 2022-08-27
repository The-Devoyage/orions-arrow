import { Utils } from "../../..";
import { Account } from "../../../types/generated";

export const getAccount = (account_id: Account["_id"], accounts: Account[]) =>
  accounts.find((a) => Utils.Common.getProperty(a, "_id") === account_id) ??
  null;

export const getAccountUsers = (
  account_id: Account["_id"],
  accounts: Account[]
) => {
  const account = getAccount(account_id, accounts);
  if (account) {
    const users = Utils.Common.getProperty(account, "users");
    return Utils.Common.getProperty(users, "data") ?? null;
  }
  return null;
};

export const getDefaultUser = (
  account_id: Account["_id"],
  accounts: Account[]
) => {
  const users = getAccountUsers(account_id, accounts);

  return (
    users?.find((u) =>
      Utils.Common.getProperty(u, "memberships")?.find(
        (m) => !!Utils.Common.getProperty(m, "default")
      )
    ) ?? null
  );
};
