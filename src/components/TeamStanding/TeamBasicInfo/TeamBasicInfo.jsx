import React from "react";
import styled from "styled-components/macro";
import { SPACE } from "../../../Tools/CONSTANTS";
function TeamBasicInfo({ position, name, logo }) {
  return (
    <TeamInfoWrapper>
      <PositionNumber style={{ flex: "0 0 20%" }}>{position}</PositionNumber>
      <TeamName style={{ flex: "0 0 50%" }}>{name}</TeamName>
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
  font-size: 3rem;
`;

const TeamName = styled.span`
  font-size: 1.25rem;
`;

const TeamLogo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
`;
