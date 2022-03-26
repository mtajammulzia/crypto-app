import { Dispatch, ReactElement, SetStateAction } from "react";

export interface IToast {
  type: ToastMapKey;
  title: string;
  message: string;
}

export interface IToastContext {
  toastList: Array<IToast>;
  setToastList: Dispatch<SetStateAction<Array<IToast>>>;
}

export type ToastMapKey = "success" | "error" | "info" | "warning";

export type ToastMap = {
  [key in ToastMapKey]: {
    color: string;
    icon: ReactElement;
  };
};
