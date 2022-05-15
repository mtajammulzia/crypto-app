import { ICurrencyPrice } from "helpers/types";
import { FC } from "react";
import * as Styled from "../styles";

interface CryptoRateProps extends ICurrencyPrice {}

export const CryptoRate: FC<CryptoRateProps> = (props) => {
  const { currency, price } = props;
  return (
    <Styled.CryptoRateWrapper>
      <Styled.Description>{currency}</Styled.Description>
      <Styled.Description>{`$ ${price}`}</Styled.Description>
    </Styled.CryptoRateWrapper>
  );
};
