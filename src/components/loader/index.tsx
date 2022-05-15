import { FC } from "react";
import { PropagateLoader } from "react-spinners";

interface LoaderProps {
  color?: string;
  size?: string | number;
}

export const Loader: FC<LoaderProps> = (props) => {
  let { color, size } = props;
  color = color || "#ff004f";
  return <PropagateLoader color={color} size={size} />;
};
