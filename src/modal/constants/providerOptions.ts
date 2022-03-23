import WalletConnectProvider from "@walletconnect/web3-provider";
import { INFURA_PROJECT_ID } from "helpers/constants/keys";
import { NETWORK, WALLETCONNECT_BRIDGE } from ".";

interface IProviderOptions {
  [key: string]: any;
}

export const providerOptions: IProviderOptions = {
  walletconnect: {
    ConnectorInstance: WalletConnectProvider,
    opts: {
      brdige: WALLETCONNECT_BRIDGE,
      qrcode: true,
      infuraId: INFURA_PROJECT_ID,
      network: NETWORK,
    },
  },
};
