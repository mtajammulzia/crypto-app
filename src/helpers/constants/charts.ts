import { ILineChart } from "helpers/types";

export const EMPTYCHART: ILineChart = {
  labels: [""],
  datasets: [
    {
      label: "My First Dataset",
      data: [0],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
};
