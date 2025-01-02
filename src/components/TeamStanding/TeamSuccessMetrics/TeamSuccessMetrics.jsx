import React from "react";
import styled from "styled-components/macro";
import { SPACE } from "../../../Tools/CONSTANTS";
function TeamSuccessMetrics({ points, playedGames, won, draw, lost }) {
  return (
    <TeamMetricsWrapper>
      <span>{points}</span>
      <span>{playedGames}</span>
      <span>{won}</span>
      <span>{draw}</span>
      <span>{lost}</span>
    </TeamMetricsWrapper>
  );
}

export default TeamSuccessMetrics;

const TeamMetricsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: ${SPACE.small}px;

  span {
    width: 2.5em;
    text-align: center;
    border: 1px solid;
    border-radius: ${(SPACE.small * 3) / 4}px;
    padding: ${SPACE.small / 2}px;
  }
`;
