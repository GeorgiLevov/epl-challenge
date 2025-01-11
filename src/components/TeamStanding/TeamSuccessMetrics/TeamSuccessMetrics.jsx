import React from "react";
import styled from "styled-components/macro";
import { COLORS, SPACE } from "../../../Tools/CONSTANTS";
function TeamSuccessMetrics({ points, playedGames, won, draw, lost }) {
  return (
    <TeamMetricsWrapper>
      <Metric>{points}</Metric>
      <Metric>{playedGames}</Metric>
      <Metric>{won}</Metric>
      <Metric>{draw}</Metric>
      <Metric>{lost}</Metric>
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
  margin-right: ${SPACE.large}px;
`;

const Metric = styled.span`
  position: relative;
  z-index: 2;
  flex: 0 0 15%;
  font-family: "Outfit";
  font-size: 1.75rem;
  font-weight: 500;
  text-align: center;
  border: 0px solid;
  border-radius: ${(SPACE.small * 3) / 4}px;
  padding: ${SPACE.small / 2}px;
  background: radial-gradient(${COLORS.transparentGray75} 25%, transparent);

  &:nth-child(n) {
    &::after {
      font-size: 1.5rem;
      position: absolute;
      width: max-content;
      height: max-content;
      vertical-align: top;
      max-width: 28px;
      max-height: 20px;
      line-height: 20px;
      white-space: pre;
      z-index: -1;
      bottom: 0px;
      right: 0px;
      color: white;
      font-weight: 600;
      overflow: hidden;
      border-radius: 0px 0px 6px 0px;
      background: linear-gradient(100deg, ${COLORS.white} 75%, transparent);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  &:nth-child(1) {
    &::after {
      content: "pts";
    }
  }
  &:nth-child(2) {
    &::after {
      content: "mp";
    }
  }
  &:nth-child(3) {
    &::after {
      content: "W";
    }
  }
  &:nth-child(4) {
    &::after {
      content: "D";
    }
  }
  &:nth-child(5) {
    &::after {
      content: "L";
    }
  }
`;
