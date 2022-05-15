import { FC } from "react";
import { ITrade } from "helpers/types";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import * as Styled from "../styles";

interface SingleTradeProps extends Partial<ITrade> {
  pair: string;
}

export const SingleTrade: FC<SingleTradeProps> = (props) => {
  const { price, size, side, pair } = props;
  const crypto = pair.split("-")[0];

  const trimString = (str: string) => {
    if (str.length < 8) return str;
    return str.substring(0, 8);
  };

  const trimmedPrice = trimString(price || "");
  const trimmedSize = trimString(size || "");

  return (
    <Styled.SingleTradeWrapper className={side}>
      <Styled.DescriptionSpan>
        {side === "buy" ? <FaArrowDown /> : <FaArrowUp />}
        <Styled.Description>
          {trimmedSize} @ {trimmedPrice}
        </Styled.Description>
      </Styled.DescriptionSpan>
    </Styled.SingleTradeWrapper>
  );
};
