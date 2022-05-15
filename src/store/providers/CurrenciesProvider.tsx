import React, { useState } from "react";
import { CurrenciesContext } from "../contexts";

interface PairProps {
  children: React.ReactNode;
}

export const CurrenciesProvider: React.FC<PairProps> = (props) => {
  const { children } = props;
  const [currencies, setCurrencies] = useState<Array<string>>([]);
  const value = {
    currencies,
    setCurrencies,
  };

  return (
    <CurrenciesContext.Provider value={value}>
      {children}
    </CurrenciesContext.Provider>
  );
};
