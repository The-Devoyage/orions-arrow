import { Utils } from "../../..";
import { User } from "../../../types/generated";

export const getUser = (user_id: User["_id"], users: User[]) =>
  users.find((u) => Utils.Common.getProperty(u, "_id") === user_id) ?? null;
