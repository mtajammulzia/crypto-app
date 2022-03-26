import { FC } from "react";
import { WalletConnect } from "components";
import * as Styled from "./styles";

export const Header: FC = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.NavSection>
        <h2>Navbar</h2>
      </Styled.NavSection>
      <Styled.ConnectorSection>
        <WalletConnect />
      </Styled.ConnectorSection>
    </Styled.HeaderWrapper>
  );
};
