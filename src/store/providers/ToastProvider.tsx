import React, { useState } from "react";
import { IToast } from "helpers/types";
import { ToastContext } from "../contexts";

interface ToastProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProps> = (props) => {
  const { children } = props;
  const [toastList, setToastList] = useState<Array<IToast>>([]);
  const value = {
    toastList,
    setToastList,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
