import WalletConnectLogo from "../logos/walletconnect-circle.svg";
// import WalletLinkLogo from "../logos/walletlink.svg";

import { IProviderInfo } from "../../helpers";

export * from "../injected";

export const providers: Array<IProviderInfo> = [
  {
    id: "walletconnect",
    name: "WalletConnect",
    logo: WalletConnectLogo,
    type: "qrcode",
    check: "isWalletConnect",
    package: {
      required: [["infuraId", "rpc"]],
    },
  },
  // {
  //   id: "walletlink",
  //   name: "Coinbase Wallet",
  //   logo: WalletLinkLogo,
  //   type: "qrcode",
  //   check: "isWalletLink",
  //   package: {
  //     required: [["appName", "infuraId", "rpc"]],
  //   },
  // },
];

// export const WALLETCONNECT: IProviderInfo = {
//   id: "walletconnect",
//   name: "WalletConnect",
//   logo: WalletConnectLogo,
//   type: "qrcode",
//   check: "isWalletConnect",
//   package: {
//     required: [["infuraId", "rpc"]],
//   },
// };

// export const WALLETLINK: IProviderInfo = {
//   id: "walletlink",
//   name: "Coinbase Wallet",
//   logo: WalletLinkLogo,
//   type: "qrcode",
//   check: "isWalletLink",
//   package: {
//     required: [["appName", "infuraId", "rpc"]],
//   },
// };
