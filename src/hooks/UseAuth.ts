import { useContext } from "react";
import { AuthContext } from "auth/contexts";

export const useAuth = () => {
  const { login, logout, refreshWeb3State } = useContext(AuthContext);

  return {
    performLogin: login,
    performLogout: logout,
    refreshWeb3State,
  };
};
