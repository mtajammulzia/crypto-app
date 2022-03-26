import { FC, ReactNode } from "react";
import { UserContext } from "auth/contexts";
import { initialUserState, UserStateT } from "auth/helpers";
import { useLocalStorage } from "hooks";

type Props = {
  children: ReactNode;
};

export const UserProvider: FC<Props> = ({ children }) => {
  const { value, setValue } = useLocalStorage<UserStateT>(
    "user",
    initialUserState
  );

  return (
    <UserContext.Provider value={{ userState: value, setUserState: setValue }}>
      {children}
    </UserContext.Provider>
  );
};
