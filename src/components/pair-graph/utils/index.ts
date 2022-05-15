import { ILineChart, ILineChartDatasets } from "helpers/types";
import { padZeros } from "helpers/utils";

export const formatData = (data: any[], timeFrame: string): ILineChart => {
  const labels = data.map((val: number[]) => {
    const ts = val[0];
    const date = new Date(ts * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const hour = date.getHours();
    const minutes = date.getMinutes();
    return `${padZeros(month)}-${padZeros(day)} ${padZeros(hour)}:${padZeros(
      minutes
    )}`;
  });
  const newData: Array<number> = data.map((val) => val[4]);
  const datasets: Array<ILineChartDatasets> = [
    {
      label: "Price",
      data: newData.reverse(),
      borderColor: "cyan",
      backgroundColor: "cyan",
      strokeColor: "rgb(255, 0, 0)",
      pointRadius: 0,
      fill: false,
    },
  ];
  return {
    labels: labels.reverse(),
    datasets,
  };
};
