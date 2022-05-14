import { useContext } from "react";
import { UserContext } from "auth/contexts";

export const useProfile = () => {
  const { userState, setUserState } = useContext(UserContext);
  return {
    userState,
    setUserState,
  };
};
