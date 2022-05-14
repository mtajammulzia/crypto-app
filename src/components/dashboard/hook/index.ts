import { ILineChart, ILineChartDatasets } from "helpers/types";

export const formatData = (data: any[]): ILineChart => {
  const labels = data.map((val: number[]) => {
    const ts = val[0];
    const date = new Date(ts * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  });
  const newData: Array<number> = data.map((val) => val[4]);
  const datasets: Array<ILineChartDatasets> = [
    {
      label: "Price",
      data: newData,
      backgroundColor: "rgb(255, 99, 132, 0.8)",
      borderColor: "rgba(255, 99, 132, 0.2)",
      fill: false,
    },
  ];
  return {
    labels,
    datasets,
  };
};
