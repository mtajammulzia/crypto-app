import { ILooseObject } from "helpers/types";

export const TIMEFRAMES = [
  "6 Hours",
  "1 Day",
  "3 Days",
  "12 Days",
  "90 Days",
  "8 Months",
];

export const GRANULARITIES: ILooseObject<number> = {
  "6 Hours": 60,
  "1 Day": 300,
  "3 Days": 900,
  "12 Days": 3600,
  "90 Days": 21600,
  "8 Months": 86400,
};
