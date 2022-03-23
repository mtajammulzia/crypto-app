import { IProviderInfo } from "../../helpers";

// import Web3DefaultLogo from "../logos/web3-default.svg";
import MetaMaskLogo from "../logos/metamask.svg";
// import CoinbaseLogo from "../logos/coinbase.svg";

export const injecteds: Array<IProviderInfo> = [
  // {
  //   id: "injected",
  //   name: "Web3",
  //   logo: Web3DefaultLogo,
  //   type: "injected",
  //   check: "isWeb3",
  // },
  {
    id: "injected",
    name: "MetaMask",
    logo: MetaMaskLogo,
    type: "injected",
    check: "isMetaMask",
  },
  // {
  //   id: "injected",
  //   name: "Coinbase",
  //   logo: CoinbaseLogo,
  //   type: "injected",
  //   check: "isCoinbaseWallet",
  // },
];

// export const FALLBACK: IProviderInfo = {
//   id: "injected",
//   name: "Web3",
//   logo: Web3DefaultLogo,
//   type: "injected",
//   check: "isWeb3",
// };

// export const METAMASK: IProviderInfo = {
//   id: "injected",
//   name: "MetaMask",
//   logo: MetaMaskLogo,
//   type: "injected",
//   check: "isMetaMask",
// };

// export const COINBASE: IProviderInfo = {
//   id: "injected",
//   name: "Coinbase",
//   logo: CoinbaseLogo,
//   type: "injected",
//   check: "isCoinbaseWallet",
// };
