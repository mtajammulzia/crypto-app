export interface ILineChartDatasets {
  label: string;
  data: Array<number>;
  fill: boolean;
  borderColor?: string;
  backgroundColor?: string;
  tension?: number;
}

export interface ILineChart {
  labels: string[];
  datasets: Array<ILineChartDatasets>;
}
