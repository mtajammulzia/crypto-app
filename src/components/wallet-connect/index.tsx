import { FC, useState, useContext } from "react";
import { getProviderDescription, ICoreOptions } from "modal/helpers";
import { SUPPORTED_WALLETS } from "modal/constants";
import { FaTimes, FaWallet } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { AuthContext, UserContext } from "auth/contexts";
import { ToastContext } from "store/contexts";
import { IToast } from "helpers/types";
import * as Styled from "./styles";

export const WalletConnect: FC = () => {
  const { login } = useContext(AuthContext);
  const { userState } = useContext(UserContext);
  const { toastList, setToastList } = useContext(ToastContext);
  const { isLoggedIn, isLoading, address, ethBalance, petBalance } = userState;

  const handleConnect = async (opts: ICoreOptions) => {
    if (!isLoggedIn) login(opts);
    else {
      const newToast: IToast = {
        type: "warning",
        title: "Can Not Connect Wallet!",
        message:
          "Already connected with a different wallet, please disconnect connected wallet before connecting a new wallet.",
      };
      setToastList([...toastList, newToast]);
    }
    console.log("Perform connection");
  };

  const [show, setShow] = useState(false);

  return (
    <Styled.WalletConnectWrapper>
      <Styled.WalletBtn onClick={() => setShow(true)}>
        <FaWallet />
        <span>Connect Wallet</span>
      </Styled.WalletBtn>
      <Styled.WalletModal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Styled.WalletModalHeader>
          <Modal.Title>Choose your wallet</Modal.Title>
          <Styled.WalletModalCross onClick={() => setShow(false)}>
            <FaTimes />
          </Styled.WalletModalCross>
        </Styled.WalletModalHeader>
        <Styled.WalletModalBody>
          <Styled.WalletItemWrapper>
            {SUPPORTED_WALLETS.map((wallet) => {
              let { logo, id, name, description, type, check } = wallet;
              description = description || getProviderDescription(name, type);
              return (
                <Styled.WalletItem
                  key={name + description}
                  onClick={() => {
                    const opts: ICoreOptions = {
                      id,
                      name,
                      type,
                      check,
                    };
                    handleConnect(opts);
                    setShow(false);
                  }}
                >
                  <Styled.WalletItemImgCanvas>
                    <Styled.WalletItemImg src={logo} alt="Img" />
                  </Styled.WalletItemImgCanvas>
                  <Styled.WalletItemName>{name}</Styled.WalletItemName>
                  <Styled.WalletItemDescrip>
                    {description}
                  </Styled.WalletItemDescrip>
                </Styled.WalletItem>
              );
            })}
          </Styled.WalletItemWrapper>
        </Styled.WalletModalBody>
      </Styled.WalletModal>
    </Styled.WalletConnectWrapper>
  );
};
