import React, { useState } from "react";
import { PairContext } from "../contexts";

interface PairProps {
  children: React.ReactNode;
}

export const PairProvider: React.FC<PairProps> = (props) => {
  const { children } = props;
  const [currentPair, setCurrentPair] = useState<string>("");
  const value = {
    currentPair,
    setCurrentPair,
  };

  return <PairContext.Provider value={value}>{children}</PairContext.Provider>;
};
