import { FC } from "react";
import { WalletConnect } from "components";
import * as Styled from "./styles";
import { ShouldRender, useProfile } from "hooks";
import { getShortenedAddress } from "helpers/utils";

export const Header: FC = () => {
  const { userState } = useProfile();
  const { isLoggedIn, address } = userState;
  return (
    <Styled.HeaderWrapper>
      <Styled.NavSection>
        <ShouldRender condition={!isLoggedIn}>
          <h2>Asset Tracker App</h2>
        </ShouldRender>
        <ShouldRender condition={isLoggedIn}>
          {address && <h2>Welcome {getShortenedAddress(address)}</h2>}
        </ShouldRender>
      </Styled.NavSection>
      <Styled.ConnectorSection>
        <WalletConnect />
      </Styled.ConnectorSection>
    </Styled.HeaderWrapper>
  );
};
