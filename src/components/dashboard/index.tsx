import { FC, useState, useEffect, useRef } from "react";
import { PairChart } from "./board";
import { formatData } from "./utils";
import { ILineChart } from "helpers/types";
import { GRANULARITIES, TIMEFRAMES, EMPTYCHART } from "helpers/constants";
import { ShouldRender } from "hooks";
import * as Styled from "./styles";

export const ExchangeRateComponent: FC = () => {
  const [currencies, setcurrencies] = useState<any>([]);
  const [pair, setpair] = useState("");
  const [price, setprice] = useState("0.00");
  const [pastData, setpastData] = useState<ILineChart>();
  const [timeFrame, settimeFrame] = useState(TIMEFRAMES[0]);
  const ws = useRef<WebSocket>();

  let first = useRef(false);
  const url = "https://api.pro.coinbase.com";

  useEffect(() => {
    ws.current = new WebSocket("wss://ws-feed.pro.coinbase.com");
    let pairs: any[];

    const apiCall = async () => {
      await fetch(url + "/products")
        .then((res) => res.json())
        .then((data) => (pairs = data));

      const filtered = pairs
        .filter((pair) => {
          if (pair.quote_currency === "USD") {
            return pair;
          }
        })
        .sort((a, b) => {
          if (a.base_currency < b.base_currency) {
            return -1;
          }
          if (a.base_currency > b.base_currency) {
            return 1;
          }
          return 0;
        });
      setcurrencies(filtered);
      first.current = true;
    };

    apiCall();
  }, []);

  useEffect(() => {
    if (!first.current) {
      return;
    }

    let msg = {
      type: "subscribe",
      product_ids: [pair],
      channels: ["ticker"],
    };
    let jsonMsg = JSON.stringify(msg);
    ws.current?.send(jsonMsg);

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=${GRANULARITIES[timeFrame]}`;

    const fetchHistoricalData = async (): Promise<void> => {
      try {
        const response = await fetch(historicalDataURL);
        const dataArr = await response.json();
        //dataArr [timestamp, low, high, open, close]
        let formattedData = formatData(dataArr, timeFrame);
        setpastData(formattedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHistoricalData();

    if (ws.current) {
      ws.current.onmessage = (e) => {
        const data = JSON.parse(e.data);
        if (data.type !== "ticker") return;
        if (data.product_id === pair) setprice(data.price);
      };
    }
  }, [pair, timeFrame]);

  const handlePairSelect = (e: any) => {
    const unsubMsg = {
      type: "unsubscribe",
      product_ids: [pair],
      channels: ["ticker"],
    };
    const unsub = JSON.stringify(unsubMsg);
    ws.current?.send(unsub);
    setpair(e.target.value);
  };

  const handleTimeSelect = (e: any) => {
    settimeFrame(e.target.value);
  };

  return (
    <Styled.ExchangeChartWrapper className="container">
      <Styled.Interface>
        <Styled.PairDisplay>
          Current Pair: {pair ? pair : "Select One"}
        </Styled.PairDisplay>
        <Styled.SelectElement
          name="currency"
          value={pair}
          onChange={handlePairSelect}
        >
          {currencies.map((cur: any, idx: any) => {
            return (
              <option key={idx} value={cur.id}>
                {cur.display_name}
              </option>
            );
          })}
        </Styled.SelectElement>
        <Styled.SelectElement
          name="timeFrame"
          value={timeFrame}
          onChange={handleTimeSelect}
        >
          {TIMEFRAMES.map((timeFrame, idx) => {
            return (
              <option key={idx} value={timeFrame}>
                {timeFrame}
              </option>
            );
          })}
        </Styled.SelectElement>
      </Styled.Interface>
      <Styled.LineBreak />
      <ShouldRender condition={!!pastData}>
        {pastData && <PairChart price={price} data={pastData} />}
      </ShouldRender>
      <ShouldRender condition={!!!pastData}>
        <PairChart data={EMPTYCHART} />
      </ShouldRender>
    </Styled.ExchangeChartWrapper>
  );
};
