import { ToastMap } from "helpers/types";
import {
  FaCheck,
  FaTimes,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";

export const toastTypes: ToastMap = {
  success: {
    color: "#47d764",
    icon: <FaCheck />,
  },
  error: {
    color: "#f41032",
    icon: <FaTimes />,
  },
  info: {
    color: "#2d8cf0",
    icon: <FaInfoCircle />,
  },
  warning: {
    color: "#ffa20de7",
    icon: <FaExclamationCircle />,
  },
};

export const toastDeleteIn: number = 5100;
