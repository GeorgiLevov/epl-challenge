import React from "react";
import TeamBasicInfo from "./TeamBasicInfo/TeamBasicInfo";
import TeamSuccessMetrics from "./TeamSuccessMetrics/TeamSuccessMetrics";
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
    <div>
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
    </div>
  );
}

export default TeamStanding;
