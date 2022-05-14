import { UserContext } from "auth/contexts";
import { Header } from "components";
import { ExchangeRateComponent } from "components/dashboard";
import { ShouldRender } from "hooks";
import { useContext } from "react";
import { FC } from "react";
import * as Styled from "./styles";

export const Landing: FC = () => {
  const { userState } = useContext(UserContext);
  const { isLoggedIn } = userState;
  return (
    <Styled.LandingWrapper>
      <Header />
      <ShouldRender condition={isLoggedIn}>
        <Styled.ContentSection>
          <Styled.PairRatesWidget>Widget1</Styled.PairRatesWidget>
          <Styled.PairGraphWidget>
            <ExchangeRateComponent />
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
