import { ICoreOptions } from "modal/helpers";

export type UserStateT = {
  isLoggedIn: boolean;
  isLoading: boolean;
  address: string | undefined;
  ethBalance: Number;
  petBalance: Number;
  _id: string;
  _name: string;
  _type: string;
  _check: string;
};

export interface IUserContext {
  userState: UserStateT;
  setUserState: (user: UserStateT) => void;
}

export interface IAuthContext {
  login: (opts: ICoreOptions) => Promise<void>;
  logout: () => void;
  refreshWeb3State: () => Promise<void>;
}
