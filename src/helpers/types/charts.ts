export interface ILineChartDatasets {
  label: string;
  data: Array<number>;
  fill: boolean;
  borderColor?: string;
  backgroundColor?: string;
  tension?: number;
  strokeColor?: string;
  pointRadius?: number;
}

export interface ILineChart {
  labels: string[];
  datasets: Array<ILineChartDatasets>;
}
