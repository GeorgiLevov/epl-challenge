import React from "react";
import styled from "styled-components/macro";
import { SPACE } from "../../../Tools/CONSTANTS";
function TeamBasicInfo({ position, name, logo }) {
  let leageQualificationPosition =
    position >= 1 && position <= 4
      ? `url(../../../src/assets/positionNumberBackgrounds/positionColor_UCL.svg)`
      : position == 5
      ? `url(../../../src/assets/positionNumberBackgrounds/positionColor_EL.svg)`
      : position == 6
      ? `url(../../../src/assets/positionNumberBackgrounds/positionColor_CF.svg)`
      : position >= 18 && position <= 20
      ? `url(../../../src/assets/positionNumberBackgrounds/positionColor_RLG.svg)`
      : `url(../../../src/assets/positionNumberBackgrounds/positionColor_EPL.svg)`;
  return (
    <TeamInfoWrapper>
      <PositionNumber
        style={{
          backgroundImage: leageQualificationPosition,
        }}
      >
        {position}
      </PositionNumber>
      <TeamName>{name}</TeamName>
      <TeamLogo src={logo} width={100} />
    </TeamInfoWrapper>
  );
}

export default TeamBasicInfo;

const TeamInfoWrapper = styled.div`
  position: relative;
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
  display: block;
  font-family: "Libre Baskerville";
  font-style: normal;
  font-size: 4rem;
  letter-spacing: -4px;

  flex: 0 0 25%;
  margin-left: -${SPACE.large}px;
  text-align: center;

  background-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  /* background-image: var(--position);  */
`;

const TeamName = styled.h2`
  display: block;
  flex: 0 0 55%;
  align-self: center;
  text-align: center;
`;

const TeamLogo = styled.img`
  display: block;
  position: absolute;
  top: ${(SPACE.medium * 3) / 4}px;
  right: 0;
  width: 80px;
  height: 80px;
`;
