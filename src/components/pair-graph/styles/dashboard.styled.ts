import styled from "styled-components";

export const ExchangeChartWrapper = styled.div`
  background-color: var(--primaryColor);
  width: 100%;
  height: 100%;
  padding: 20px;
  /* border: 2px solid var(--secondaryColor); */
`;

export const Interface = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SelectElement = styled.select`
  border: none;
  box-shadow: 0px 15px 25px -4px rgba(30, 30, 60, 0.25);
  border-radius: 4px;
  width: 300px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  padding: 10px;
  box-shadow: none;
  margin: 10px 0;
  border: 1px solid;
  background: #f7f7f7;

  &:hover {
    border-color: #a1a1a1;
  }

  &:focus {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  &.indicator-separator {
    display: none;
  }

  &.menu {
    color: #3c3d3e;
  }
`;

export const PairDisplay = styled.h2`
  min-width: 400px;
  max-width: 400px;
  letter-spacing: 1px;
`;

export const BoardWrapper = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ChartCanvas = styled.div`
  height: 65vh;
  width: auto;
`;

export const RateDisplay = styled.h3`
  color: white;
  padding: 20px;
`;

export const LineBreak = styled.div`
  background-color: whitesmoke;
  height: 1px;
  margin: 10px 0;
`;
