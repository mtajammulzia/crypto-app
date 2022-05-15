import { useContext } from "react";
import { Web3Context } from "store/contexts";

export const useWeb3 = () => {
  const { web3, setWeb3 } = useContext(Web3Context);
  return {
    web3,
    setWeb3,
  };
};
