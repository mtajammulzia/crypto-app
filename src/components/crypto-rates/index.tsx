import { FC, useEffect, useRef, useState } from "react";
import { useCurrencies } from "hooks";
import { ICurrencyPrice } from "helpers/types";
import { CryptoRate } from "./crypto-rate";
import * as Styled from "./styles";

export const CryptoRates: FC = () => {
  const { currencies } = useCurrencies();
  const [currencyPrices, setCurrencyPrices] = useState<Array<ICurrencyPrice>>(
    []
  );
  const currentPointer = useRef(0);
  const maxPointer = currencies.length - 5 > 0 ? currencies.length - 5 : 0;

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (currentPointer.current + 5 < maxPointer) {
        const clippedCurrencies = currencies.slice(
          currentPointer.current,
          currentPointer.current + 5
        );
        const prices = await fetchBatchPrice(clippedCurrencies);
        const newCurrencyPrices = clippedCurrencies.map((item, index) => {
          const currencyPrice: ICurrencyPrice = {
            currency: clippedCurrencies[index],
            price: prices[index],
          };
          return currencyPrice;
        });
        setCurrencyPrices(newCurrencyPrices);
        currentPointer.current++;
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currencies, currencyPrices]);

  const fetchPrice = async (key: String) => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=${key}&tsyms=USD`
    );
    const value = await response.json();
    const { USD } = value;
    return USD;
  };

  const fetchBatchPrice = async (batch: Array<String>): Promise<Number[]> => {
    const [resp0, resp1, resp2, resp3, resp4] = await Promise.all([
      fetchPrice(batch[0]),
      fetchPrice(batch[1]),
      fetchPrice(batch[2]),
      fetchPrice(batch[3]),
      fetchPrice(batch[4]),
    ]);
    return [resp0, resp1, resp2, resp3, resp4];
  };

  fetchBatchPrice(currencyPrices.map((curr) => curr.currency));

  return (
    <Styled.CryptoRatesWrapper>
      <Styled.CryptoRateHeading>Live Currency Prices</Styled.CryptoRateHeading>
      {currencyPrices.map((item, index) => {
        const { currency, price } = item;
        return <CryptoRate key={index} currency={currency} price={price} />;
      })}
    </Styled.CryptoRatesWrapper>
  );
};
