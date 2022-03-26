import { FC, Fragment, ReactNode } from "react";

type Props = {
  condition: boolean;
  children: ReactNode;
};

export const ShouldRender: FC<Props> = ({ condition, children }) => {
  return condition ? <Fragment>{children}</Fragment> : null;
};
