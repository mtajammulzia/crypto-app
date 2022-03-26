import { IAuthContext } from ".";
import { UserStateT } from "./types";

export const initialUserState: UserStateT = {
  isLoggedIn: false,
  isLoading: false,
  address: undefined,
  ethBalance: 0,
  petBalance: 0,
  _id: "",
  _name: "",
  _type: "",
  _check: "",
};

export const initialAuthState: IAuthContext = {
  login: () => new Promise(() => {}),
  logout: () => {},
  refreshWeb3State: () => new Promise(() => {}),
};
