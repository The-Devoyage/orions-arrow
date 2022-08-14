import { createContext } from "react";
import { UserBase } from "../../../types";

export interface IGetMeContext<User extends UserBase> {
  me: User | null;
  loading: boolean;
}

export const GetMeContext = createContext<IGetMeContext<UserBase>>({
  me: null,
  loading: false,
});
