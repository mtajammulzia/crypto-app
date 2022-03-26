import { createContext } from "react";
import { initialUserState, IUserContext, UserStateT } from "auth/helpers";

export const UserContext = createContext<IUserContext>({
  userState: initialUserState,
  setUserState: (user: UserStateT) => {},
});
