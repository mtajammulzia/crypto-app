import { ILineChart } from "helpers/types";
import { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import * as Styled from "../styles";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

interface IBoard {
  price?: string;
  data: ILineChart;
}

export const PairChart: FC<IBoard> = (props) => {
  const { price, data } = props;
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgba(255,0,79,0.2)",
          borderColor: "rgba(255,0,79,1)", // <-- this line is answer to initial question
        },
      },
      y: {
        grid: {
          color: "rgba(255,0,79,0.1)",
          borderColor: "rgba(255,0,79,1)", // <-- this line is answer to initial question
        },
      },
    },
  };
  if (price === "0.00") {
    return <h2>please select a currency pair</h2>;
  }

  return (
    <Styled.BoardWrapper>
      <Styled.RateDisplay>{`Current Value: ${
        price ? `$${price}` : "None"
      }`}</Styled.RateDisplay>
      <Styled.ChartCanvas>
        <Line data={data} options={opts} />
      </Styled.ChartCanvas>
    </Styled.BoardWrapper>
  );
};
