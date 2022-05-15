import { createContext } from "react";
import { IPairContext } from "helpers/types";

export const PairContext = createContext<IPairContext>({
  currentPair: "",
  setCurrentPair: () => {},
});
