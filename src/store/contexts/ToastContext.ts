import { createContext } from "react";
import { IToastContext } from "helpers/types";

export const ToastContext = createContext<IToastContext>({
  toastList: [],
  setToastList: () => {},
});
