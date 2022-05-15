import styled from "styled-components";

export const CryptoTradeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const PairHeading = styled.h2`
  padding: 30px 0;
  letter-spacing: 1px;
`;

export const Trades = styled.div`
  width: 100%;
  min-height: 80%;
`;

export const SingleTradeWrapper = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px gray solid;
  }

  &.buy {
    background-color: rgba(0, 255, 0, 0.2);
  }

  &.sell {
    background-color: rgba(255, 0, 0, 0.2);
  }
`;

export const DescriptionSpan = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const Description = styled.p`
  padding: 6px;
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 500;
  margin-left: 10px;
`;
