import React, { useState, useContext, useEffect } from "react";
import { ToastContext } from "store/contexts";
import { IToast } from "helpers/types";
import { FaTimes } from "react-icons/fa";
import { toastTypes, toastDeleteIn } from "helpers/constants";
import * as Styled from "./styles";

export const Toast: React.FC = () => {
  const [list, setList] = useState<Array<IToast>>([]);
  const { toastList, setToastList } = useContext(ToastContext);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (list.length && toastList.length) {
        if (toastList[0].message) deleteToast(toastList[0].message);
      }
    }, toastDeleteIn);
    return () => {
      clearInterval(intervalId);
    };
  }, [toastList, list]);

  const deleteToast = (message: string) => {
    const newList = list.filter((toast) => message !== toast.message);
    setToastList([...newList]);
  };

  return (
    <Styled.ToastWrapper>
      {list.map((toast, index) => {
        const { type, title, message } = toast;
        const { color, icon } = toastTypes[type];
        return (
          <Styled.Toast key={message + index} color={color}>
            <Styled.Container1 color={color}>{icon}</Styled.Container1>
            <Styled.Container2>
              <Styled.ToastTitle>{title}</Styled.ToastTitle>
              <Styled.ToastMessage>{message}</Styled.ToastMessage>
            </Styled.Container2>
            <Styled.ToastButton
              onClick={() => {
                deleteToast(message);
              }}
            >
              <FaTimes />
            </Styled.ToastButton>
          </Styled.Toast>
        );
      })}
    </Styled.ToastWrapper>
  );
};
