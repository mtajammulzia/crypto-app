import { UserContext } from "auth/contexts";
import { Header } from "components";
import { useContext } from "react";
import { FC } from "react";
import * as Styled from "./styles";

export const Landing: FC = () => {
  const { userState } = useContext(UserContext);
  const { isLoggedIn, isLoading, address } = userState;
  return (
    <Styled.LandingWrapper>
      <Header />
      <Styled.ContentSection>
        <h2>Welcome</h2>
        {isLoggedIn && <h3>{address}</h3>}
      </Styled.ContentSection>
    </Styled.LandingWrapper>
  );
};
