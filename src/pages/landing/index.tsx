import { FC } from "react";
import {
  Header,
  PairGraph,
  CryptoTrade,
  CryptoRates,
  UserAssets,
  BackgroundOne,
  BackgroundTwo,
} from "components";
import { ShouldRender, useProfile } from "hooks";
import { CurrenciesProvider, PairProvider } from "store/providers";
import * as Styled from "./styles";

export const Landing: FC = () => {
  const { userState } = useProfile();
  const { isLoggedIn } = userState;

  return (
    <Styled.LandingWrapper>
      <CurrenciesProvider>
        <PairProvider>
          <ShouldRender condition={!isLoggedIn}>
            {/* <BackgroundTwo /> */}
            <BackgroundOne />
          </ShouldRender>
          <Header />
          <ShouldRender condition={isLoggedIn}>
            <Styled.ContentSection>
              <Styled.PairRatesWidget>
                <CryptoTrade />
              </Styled.PairRatesWidget>
              <Styled.PairGraphWidget>
                <PairGraph />
              </Styled.PairGraphWidget>
              <Styled.Wid3>
                <UserAssets />
              </Styled.Wid3>
              <Styled.Wid4>
                <CryptoRates />
              </Styled.Wid4>
            </Styled.ContentSection>
          </ShouldRender>
          <ShouldRender condition={!isLoggedIn}>
            <Styled.ContentSection></Styled.ContentSection>
          </ShouldRender>
        </PairProvider>
      </CurrenciesProvider>
    </Styled.LandingWrapper>
  );
};
