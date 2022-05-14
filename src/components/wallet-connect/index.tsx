import { FC, useState } from "react";
import { getProviderDescription, ICoreOptions } from "modal/helpers";
import { SUPPORTED_WALLETS } from "modal/constants";
import { FaTimes, FaWallet } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { IToast } from "helpers/types";
import { useAuth, useToast, useProfile, ShouldRender } from "hooks";
import * as Styled from "./styles";

export const WalletConnect: FC = () => {
  const { performLogin, performLogout } = useAuth();
  const { userState } = useProfile();
  const { toastList, setToastList } = useToast();

  const { isLoggedIn, isLoading, address, ethBalance, petBalance } = userState;

  const handleConnect = async (opts: ICoreOptions) => {
    if (!isLoggedIn) performLogin(opts);
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
      <ShouldRender condition={isLoggedIn}>
        <Styled.WalletBtn onClick={performLogout}>
          <FaWallet />
          <span>Disconnect</span>
        </Styled.WalletBtn>
      </ShouldRender>
      <ShouldRender condition={!isLoggedIn}>
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
      </ShouldRender>
    </Styled.WalletConnectWrapper>
  );
};
