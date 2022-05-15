import { FC } from "react";
import { Header, PairGraph, CryptoTrade } from "components";
import { ShouldRender, useProfile } from "hooks";
import * as Styled from "./styles";

export const Landing: FC = () => {
  const { userState } = useProfile();
  const { isLoggedIn } = userState;
  return (
    <Styled.LandingWrapper>
      <Header />
      <ShouldRender condition={isLoggedIn}>
        <Styled.ContentSection>
          <Styled.PairRatesWidget>
            <CryptoTrade />
          </Styled.PairRatesWidget>
          <Styled.PairGraphWidget>
            <PairGraph />
          </Styled.PairGraphWidget>
          <Styled.Wid3>Widget3</Styled.Wid3>
          <Styled.Wid4>Widget4</Styled.Wid4>
        </Styled.ContentSection>
      </ShouldRender>
      <ShouldRender condition={!isLoggedIn}>
        <Styled.ContentSection></Styled.ContentSection>
      </ShouldRender>
    </Styled.LandingWrapper>
  );
};
