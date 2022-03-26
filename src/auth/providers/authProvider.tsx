import { FC, ReactNode, useContext } from "react";
import { AuthContext, UserContext } from "auth/contexts";
import { initialUserState } from "auth/helpers";
import Web3Modal from "modal/core";
import { ICoreOptions } from "modal/helpers";
import { ToastContext, Web3Context } from "store/contexts";
import { IToast } from "helpers/types";

type Props = {
  children: ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const { userState, setUserState } = useContext(UserContext);
  const { web3, setWeb3 } = useContext(Web3Context);
  const { toastList, setToastList } = useContext(ToastContext);

  const handleAccountChange = async () => {
    logout();
  };

  const login = async (opts: ICoreOptions) => {
    try {
      setUserState({ ...userState, isLoading: true });
      const web3Modal = new Web3Modal(opts);
      const { ethProvider, provider } = await web3Modal.connect({
        handleAccountChange,
      });
      const signer = provider.getSigner();
      setWeb3({ ethProvider, provider, signer });
      const address = await signer.getAddress();
      setUserState({
        ...userState,
        isLoading: false,
        isLoggedIn: true,
        address: address,
        _id: opts.id,
        _name: opts.name,
        _type: opts.type,
        _check: opts.check,
      });
    } catch (error) {
      throw new Error("Failed at login: " + error);
    }
  };

  const logout = () => {
    const { ethProvider } = web3;
    const { _id, isLoggedIn } = userState;
    if (isLoggedIn) {
      if (_id === "walletconnect") ethProvider.disconnect();
      setUserState(initialUserState);
      const newToast: IToast = {
        type: "success",
        title: "Disconnected!",
        message: "Wallet successfully disconncted.",
      };
      setToastList([...toastList, newToast]);
    }
  };

  const refreshWeb3State = async () => {
    const { isLoggedIn, _id, _name, _type, _check } = userState;
    if (isLoggedIn) {
      const opts: ICoreOptions = {
        id: _id,
        name: _name,
        type: _type,
        check: _check,
      };
      try {
        const web3Modal = new Web3Modal(opts);
        const { ethProvider, provider } = await web3Modal.connect({
          handleAccountChange,
        });
        const signer = provider.getSigner();
        setWeb3({ ethProvider, provider, signer });
        const address = await signer.getAddress();
        setUserState({
          ...userState,
          address: address,
        });
      } catch (error) {
        throw new Error("Failed at refreshWeb3State: " + error);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ login, logout, refreshWeb3State }}>
      {children}
    </AuthContext.Provider>
  );
};
