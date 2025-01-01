import React from "react";
import { useFootballData } from "../../../db/context/footballData.context";
import TeamStanding from "../../components/TeamStanding";
import styled from "styled-components/macro";
import { SPACE } from "../../Tools/CONSTANTS";

function Standings() {
  let { fullStandingsData } = useFootballData();

  const [standings, setStandings] = React.useState([]);

  React.useEffect(() => {
    if (typeof fullStandingsData === "string") {
      const parsedData = JSON.parse(fullStandingsData);
      if (parsedData && parsedData.standings[0].table) {
        setStandings(parsedData.standings[0].table);
      }
    }
  }, [fullStandingsData]);

  return (
    <TeamsWrapper>
      {Array.isArray(standings) &&
        standings.map((team, index) => (
          <TeamStanding key={index} teamDetails={team} />
        ))}
    </TeamsWrapper>
  );
}

export default Standings;

const TeamsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: ${SPACE.medium}px;
`;
