import { IAuthContext, initialAuthState } from "auth/helpers";
import { createContext } from "react";

export const AuthContext = createContext<IAuthContext>(initialAuthState);
