import styled from "styled-components";

export const LandingWrapper = styled.div``;

export const ContentSection = styled.div`
  background-color: var(--primaryColor);
  min-height: 90vh;
  display: grid;
  grid-template-areas:
    "pair_rates pair_graph pair_graph pair_graph"
    "pair_rates pair_graph pair_graph pair_graph"
    "wid3 wid3 wid3 wid4";
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const PairRatesWidget = styled.div`
  grid-area: pair_rates;
  border-left: 1px solid var(--violetColor);
  border-top: 1px solid var(--violetColor);
  border-bottom: 1px solid var(--violetColor);
`;

export const PairGraphWidget = styled.div`
  grid-area: pair_graph;
  border: 1px solid var(--violetColor);
`;

export const Wid3 = styled.div`
  grid-area: wid3;
  /* background-color: red; */
  border-left: 1px solid var(--violetColor);
  border-right: 1px solid var(--violetColor);
  border-bottom: 1px solid var(--violetColor);
  /* color: black;
  font-size: 32px;
  font-weight: 1000;
  display: grid;
  align-content: center; */
`;

export const Wid4 = styled.div`
  grid-area: wid4;
  border-right: 1px solid var(--violetColor);
  border-bottom: 1px solid var(--violetColor);
  /* background-color: cyan;
  color: black;
  font-size: 32px;
  font-weight: 1000;
  display: grid;
  align-content: center; */
`;
