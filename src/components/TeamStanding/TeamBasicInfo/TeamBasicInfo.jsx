import React from "react";
import styled from "styled-components/macro";
import { SPACE } from "../../../Tools/CONSTANTS";

import firstPosBG from "../../../assets/positionNumberBackgrounds/firstPosition.svg";
function TeamBasicInfo({ position, name, logo }) {
  return (
    <TeamInfoWrapper>
      <PositionNumber>{position}</PositionNumber>
      <TeamName>{name}</TeamName>
      <TeamLogo src={logo} width={100} />
    </TeamInfoWrapper>
  );
}

export default TeamBasicInfo;

const TeamInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 100px;
  min-height: 100px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: baseline;
  margin-top: -${SPACE.medium + 2}px;
  gap: ${SPACE.small / 2}px;
`;

const PositionNumber = styled.span`
  flex: 0 0 25%;
  font-family: "Italianno", serif;
  font-style: normal;
  font-size: 6rem;
  line-height: 5rem;
  height: 4rem;
  /* margin-top: -${SPACE.large}px; */
  margin-left: -${SPACE.large}px;
  background-color: transparent;
  background-image: url("../../../src/assets/positionNumberBackgrounds/firstPosition.svg");
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const TeamName = styled.span`
  flex: 0 0 50%;
  font-size: 1.35rem;
  font-family: "Radio Canada";
  font-style: italic;
  line-height: 4rem;
`;

const TeamLogo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
`;
