import React from "react";
import { useFootballData } from "../../../db/context/footballData.context";
import TeamStanding from "../../components/TeamStanding";

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
    <div>
      {Array.isArray(standings) &&
        standings.map((team, index) => (
          <TeamStanding key={index} teamDetails={team} />
        ))}
    </div>
  );
}

export default Standings;
