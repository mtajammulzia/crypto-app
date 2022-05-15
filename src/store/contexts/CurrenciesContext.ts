import { createContext } from "react";
import { ICurrenciesContext } from "helpers/types";

export const CurrenciesContext = createContext<ICurrenciesContext>({
  currencies: [],
  setCurrencies: () => {},
});
