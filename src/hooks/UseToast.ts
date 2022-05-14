import { useContext } from "react";
import { ToastContext } from "store/contexts";

export const useToast = () => {
  const { toastList, setToastList } = useContext(ToastContext);

  return {
    toastList,
    setToastList,
  };
};
