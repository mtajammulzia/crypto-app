import { FC, useEffect, useState, useRef } from "react";
import { ShouldRender, usePair } from "hooks";
import { ITrade } from "helpers/types";
import { SingleTrade } from "./single-trade";
import { Loader } from "components/loader";
import * as Styled from "./styles";

export const CryptoTrade: FC = () => {
  const { currentPair } = usePair();
  const [trades, setTrades] = useState<Array<ITrade>>([]);
  const [loading, setLoading] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    setTrades([]);
    if (!firstRender.current) setLoading(true);
    firstRender.current = false;
  }, [currentPair]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (currentPair !== "") {
        try {
          const response = await fetch(
            `https://api.pro.coinbase.com/products/${currentPair}/trades?limit=18`
          );
          const fetchedTrades = await response.json();
          setTrades(fetchedTrades);
          setLoading(false);
        } catch (error) {
          throw new Error("failed at fetching Trades" + error);
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [trades]);

  return (
    <Styled.CryptoTradeWrapper>
      <Styled.PairHeading>
        Trades for: {currentPair !== "" ? currentPair : "Select Pair"}
      </Styled.PairHeading>
      <ShouldRender condition={loading}>
        <Styled.Trades>
          <Loader />
        </Styled.Trades>
      </ShouldRender>
      <ShouldRender condition={!loading}>
        <Styled.Trades>
          {trades.map((trade) => {
            const { time, trade_id, price, size, side } = trade;
            return (
              <SingleTrade
                key={trade_id}
                pair={currentPair}
                time={time}
                trade_id={trade_id}
                price={price}
                size={size}
                side={side}
              />
            );
          })}
        </Styled.Trades>
      </ShouldRender>
    </Styled.CryptoTradeWrapper>
  );
};
