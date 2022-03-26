import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";

export const WalletConnectWrapper = styled.div`
  position: relative;
`;

export const WalletBtn = styled(Button)`
  font-size: 1.125rem;
  color: var(--textColor);
  background-color: var(--secondaryColor);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 6px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.1s all ease-in-out;

  & span {
    margin-left: 4px;
  }

  @media screen and (max-width: 575px) {
    padding: 0;
    width: 32px;
    height: 32px;
    & span {
      display: none;
    }
  }

  &:hover,
  &:focus,
  &:active,
  &:not(:disabled):not(.disabled):active:focus,
  &:not(:disabled):not(.disabled):active {
    transform: scale(1.06);
  }
`;

export const WalletModal = styled(Modal)`
  width: 50%;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 24px;
  border-radius: 20px;
  border: 2px solid var(--secondaryColor);
  background-color: rgb(150, 150, 150);
  /* background: transparent; */

  & .modal-dialog {
    max-width: 640px;
    min-height: 10px;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  & .modal-content {
    border-radius: 16px;
    overflow-y: auto;
  }
`;

export const WalletModalHeader = styled(Modal.Header)`
  padding: 40px 40px 20px;
  border-bottom: none;

  @media screen and (max-width: 575px) {
    padding: 40px 24px 20px;
  }

  & .modal-title {
    font-size: 24px;
    color: #1f1f23;
    font-weight: 600;
    margin-bottom: 0;
  }
`;

export const WalletModalCross = styled(Button)`
  font-size: 16px;
  color: #1f1f23;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 5%);
  border: none;
  position: absolute;
  right: 18px;
  top: 18px;
  transition: all 0.2s ease;
  margin: 0;

  &:hover,
  &:focus,
  &:active,
  &:not(:disabled):not(.disabled):active:focus,
  &:not(:disabled):not(.disabled):active {
    background-color: #1f1f23;
    box-shadow: none;
    border: none;
    color: #fff;
  }
`;

export const WalletModalBody = styled(Modal.Body)`
  padding: 0px 20px 40px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  @media screen and (max-width: 575px) {
    padding: 0px 12px 24px;
  }
`;

export const WalletItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  overflow-y: auto;
  padding: 0px 20px;

  @media screen and (max-width: 575px) {
    padding: 0px 12px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #eaeaea;
    border-radius: 10px;
  }

  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
  }
`;

export const WalletItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.64);
  border-radius: 12px;
  padding: 24px 16px;
  text-align: center;
  transition: 0.2s all;

  &:hover {
    background-color: rgba(0, 0, 0, 0.94);
    cursor: pointer;
  }
`;

export const WalletItemImgCanvas = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  margin-bottom: 14px;
`;

export const WalletItemImg = styled.img`
  max-width: 100%;
`;

export const WalletItemName = styled.h4`
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const WalletItemDescrip = styled.p`
  font-size: 14px;
  color: rgb(169, 169, 188);
  margin: 0px;
  min-height: 42px;
`;
