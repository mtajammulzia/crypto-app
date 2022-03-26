import styled, { keyframes } from "styled-components";

export const ToastWrapper = styled.div`
  width: 400px;
  position: absolute;
  bottom: 50px;
  left: 10px;
  overflow: hidden;
  z-index: 99;
`;

const slideInOut = keyframes`
0% { transform: translateX(-500px) }
25% { transform: translateX(0px); }
70% { transform: translateX(0px); }
100% { transform: translateX(-500px) }
`;

export const Toast = styled.div`
  width: 95%;
  height: auto;
  padding: 20px 10px;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(75, 50, 50, 0.35);
  border-left: 8px solid ${(props) => props.color};
  border-radius: 7px;
  display: grid;
  grid-template-columns: 1fr 6fr 0.5fr;
  animation-name: ${slideInOut};
  animation-duration: 6s;
  transform: translateX(-500px);
  z-index: 100;
`;

export const Container1 = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background: ${(props) => props.color};
  font-size: 30px;
  border-radius: 4px;
  color: #fff;
`;

export const Container2 = styled.div`
  align-self: center;
`;

export const ToastTitle = styled.p`
  font-weight: 600;
  margin: 0;
  padding: 0px 10px;
  font-size: 18px;
  color: #101020;
`;

export const ToastMessage = styled.p`
  font-weight: 400;
  margin: 0;
  padding: 0px 12px;
  font-size: 12px;
  color: #656565;
`;

export const ToastButton = styled.button`
  align-self: center;
  background-color: transparent;
  line-height: 0;
  border: none;
  font-size: 30px;
  color: #656565;
  cursor: pointer;
`;
