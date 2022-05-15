import { useContext } from "react";
import { PairContext } from "store/contexts";

export const usePair = () => {
  const { currentPair, setCurrentPair } = useContext(PairContext);
  return {
    currentPair,
    setCurrentPair,
  };
};
