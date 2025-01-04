import React from "react";
import TeamBasicInfo from "./TeamBasicInfo/TeamBasicInfo";
import TeamSuccessMetrics from "./TeamSuccessMetrics/TeamSuccessMetrics";
import styled from "styled-components/macro";
import {
  BREAKPOINTS,
  COLORS,
  GRATIENTS,
  SHADOWS,
  SPACE,
} from "../../Tools/CONSTANTS";

// teamDetails
//
// draw
// form
// goalDifference
// goalsAgainst
// goalsFor
// lost
// playedGames
// points
// position
// team : {id: 64, name: 'Liverpool FC', shortName: 'Liverpool', tla: 'LIV', crest: 'https://crests.football-data.org/64.png'}
// won

function TeamStanding({ teamDetails }) {
  return (
    <TeamStandingWrapper>
      <TeamBasicInfo
        position={teamDetails.position}
        name={teamDetails.team.shortName}
        logo={teamDetails.team.crest}
      ></TeamBasicInfo>
      <TeamSuccessMetrics
        points={teamDetails.points}
        playedGames={teamDetails.playedGames}
        won={teamDetails.won}
        draw={teamDetails.draw}
        lost={teamDetails.lost}
      />
    </TeamStandingWrapper>
  );
}

export default TeamStanding;

const TeamStandingWrapper = styled.div`
  width: 100%;
  max-width: ${BREAKPOINTS.phone / 2 + 20}px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

  border: 0px transparent;
  padding: ${SPACE.small}px 0px;
  /* background-color: ${COLORS.grayCard}; */
  background-image: ${GRATIENTS.cardGradient};

  /* box-shadow: ${SHADOWS.boxShadowCard}; */

  &:hover {
    /* box-shadow: ${SHADOWS.boxShadowCardHover}; */
  }
`;
