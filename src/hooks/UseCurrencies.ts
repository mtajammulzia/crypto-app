import { useContext } from "react";
import { CurrenciesContext } from "store/contexts";

export const useCurrencies = () => {
  const { currencies, setCurrencies } = useContext(CurrenciesContext);
  return {
    currencies,
    setCurrencies,
  };
};
