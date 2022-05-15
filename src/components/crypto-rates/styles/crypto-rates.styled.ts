import styled from "styled-components";

export const CryptoRatesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const CryptoRateHeading = styled.h2`
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid white;
`;

export const CryptoRateWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100%;
  padding: 10px;

  &:not(:last-child) {
    border-bottom: 1px rgba(255, 255, 255, 0.2) solid;
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
  width: 50%;
`;
