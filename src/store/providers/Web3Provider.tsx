import { FC, ReactNode, useState, useContext, useEffect } from "react";
import { UserContext } from "auth/contexts";
import { ToastContext, Web3Context } from "store/contexts";
import { ICoreOptions } from "modal/helpers";
import Web3Modal from "modal/core";
import { initialUserState } from "auth/helpers";
import { IToast } from "helpers/types";

type Props = {
  children: ReactNode;
};

export const Web3Provider: FC<Props> = ({ children }) => {
  const [value, setValue] = useState({
    ethProvider: null,
    provider: null,
    signer: null,
  });

  useEffect(() => {
    (async () => {
      setValue(await getInitial());
    })();
  }, []);

  const { userState, setUserState } = useContext(UserContext);
  const { toastList, setToastList } = useContext(ToastContext);

  const logout = () => {
    const { ethProvider } = value;
    const { _id, isLoggedIn } = userState;
    if (isLoggedIn) {
      if (_id === "walletconnect") (ethProvider as any).disconnect();
      setUserState(initialUserState);
      const newToast: IToast = {
        type: "success",
        title: "Disconnected!",
        message: "Wallet successfully disconncted.",
      };
      setToastList([...toastList, newToast]);
    }
  };

  const handleAccountChange = () => {
    logout();
  };

  const getInitial = async () => {
    const { isLoggedIn, _id, _type, _name, _check } = userState;
    if (isLoggedIn) {
      const opts: ICoreOptions = {
        id: _id,
        name: _name,
        type: _type,
        check: _check,
      };
      const web3Modal = new Web3Modal(opts);
      const { ethProvider, provider } = await web3Modal.connect({
        handleAccountChange,
      });
      const signer = await provider.getSigner();
      return {
        ethProvider,
        provider,
        signer,
      };
    } else {
      return {
        ethProvider: null,
        provider: null,
        signer: null,
      };
    }
  };

  return (
    <Web3Context.Provider
      value={{
        web3: value,
        setWeb3: setValue,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
