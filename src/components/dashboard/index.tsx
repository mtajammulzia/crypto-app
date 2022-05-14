import { FC } from "react";
import * as Styled from "./styles";
import React, { useState, useEffect, useRef } from "react";
import { Board } from "./board";
import { formatData } from "./hook";
import { ILineChart } from "helpers/types";
import { Chart } from "chart.js";

export const Dashboard: FC = () => {
  const [currencies, setcurrencies] = useState<any>([]);
  const [pair, setpair] = useState("");
  const [price, setprice] = useState("0.00");
  const [pastData, setpastData] = useState<ILineChart>();
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

      let filtered = pairs.filter((pair) => {
        if (pair.quote_currency === "USD") {
          return pair;
        }
      });

      filtered = filtered.sort((a, b) => {
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

    let historicalDataURL = `${url}/products/${pair}/candles?granularity=86400`;
    const fetchHistoricalData = async (): Promise<void> => {
      let dataArr: any[];
      try {
        const response = await fetch(historicalDataURL);
        dataArr = await response.json();
        let formattedData = formatData(dataArr);
        setpastData(formattedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHistoricalData();
    if (ws.current) {
      ws.current.onmessage = (e) => {
        let data = JSON.parse(e.data);
        if (data.type !== "ticker") {
          return;
        }

        if (data.product_id === pair) {
          setprice(data.price);
        }
      };
    }
  }, [pair]);

  const handleSelect = (e: any) => {
    let unsubMsg = {
      type: "unsubscribe",
      product_ids: [pair],
      channels: ["ticker"],
    };
    let unsub = JSON.stringify(unsubMsg);

    ws.current?.send(unsub);

    setpair(e.target.value);
  };
  return (
    <div className="container">
      {
        <select name="currency" value={pair} onChange={handleSelect}>
          {currencies.map((cur: any, idx: any) => {
            return (
              <option key={idx} value={cur.id}>
                {cur.display_name}
              </option>
            );
          })}
        </select>
      }
      {pastData && <Board price={price} data={pastData} />}
    </div>
  );
};
