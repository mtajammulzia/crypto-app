import { ILineChart } from "helpers/types";
import { FC, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

interface IBoard {
  price: string;
  data: ILineChart;
}

export const Board: FC<IBoard> = (props) => {
  const { price, data } = props;
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index",
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  if (price === "0.00") {
    return <h2>please select a currency pair</h2>;
  }

  console.log(data);
  console.log(opts);

  return (
    <div className="board">
      <h2>{`$${price}`}</h2>
      <div className="chart-container">
        <Line data={data} options={opts} />
      </div>
    </div>
  );
};
