/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useParams, Link } from "react-router-dom";
import WeeksObject from "../../assets/games_by_week.json";
import { canStillBet } from "../../Functions/gameFunctions";
import GoBack from "../../components/GoBackBtn";
import styled from "styled-components/macro";
import { COLORS, SHADOWS, QUERIES, SPACE } from "../../Tools/CONSTANTS";
import { useFootballData } from "../../../db/context/footballData.context";
import React from "react";

const Matches = () => {
  const { id } = useParams();

  let gameID = id * 10;

  let { fullMatchesData } = useFootballData();

  const [matches, setMatches] = React.useState([]);

  React.useEffect(() => {
    if (typeof fullMatchesData === "string") {
      const parsedData = JSON.parse(fullMatchesData);
      if (parsedData && parsedData.matches) {
        console.log(gameID);
        console.log(parseInt(gameID) - 10, parseInt(gameID));
        setMatches(
          parsedData.matches.slice(parseInt(gameID) - 10, parseInt(gameID))
        );
      }
    }
  }, [fullMatchesData]);

  console.log(matches);

  const votingAllowed = false;

  return (
    <>
      <>
        <h1 style={{ marginBottom: SPACE.large }}>Matchweek {id}</h1>
        {matches.map((game, index) => {
          let gameLink = votingAllowed
            ? `../../game/${game.id}`
            : `../../game/${game.id}?d=true`;
          if (votingAllowed) {
            return (
              <StyledLink key={game.id} to={gameLink}>
                <Match key={game.id}>
                  <Team>{game.home}</Team>
                  <Results>
                    {"V"}
                    {"S"}
                  </Results>
                  <Team>{game.away}</Team>
                </Match>
              </StyledLink>
            );
          } else {
            return (
              <Match key={game.id}>
                <Team>{game.homeTeam.tla}</Team>
                <Results>
                  {game.score.fullTime.home}-{game.score.fullTime.away}
                </Results>
                <Team>{game.awayTeam.tla}</Team>
              </Match>
            );
          }
        })}

        <GoBack />
      </>
    </>
  );
};

const MatchWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  gap: 16px;
  z-index: 2;
  margin-bottom: 48px;
`;

const Match = styled.div`
  padding: 16px;
  margin-bottom: 20px;
  border: none;
  border-radius: 20px;

  height: 60px;

  width: 100%;
  max-width: 900px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  text-align: center;
  gap: 8px;

  box-shadow: ${SHADOWS.shadowElevationMedium};

  background-image: linear-gradient(
    140deg,
    hsl(184deg 100% 51%) 0%,
    hsl(202deg 100% 50%) 20%,
    hsl(237deg 100% 71%) 40%,
    hsl(249deg 100% 67%) 60%,
    hsl(259deg 100% 62%) 80%,
    hsl(268deg 100% 62%) 100%
  );
  /* background-image: linear-gradient(98.5deg,#05f0ff -46.16%,#7367ff 42.64%,#963cff 70.3%); */

  @media ${QUERIES.phoneAndUp} {
    height: 68px;
    min-width: 640px;

    margin-bottom: 32px;
    padding: 16px 32px;
  }
`;
const Team = styled.div`
  color: ${COLORS.white};
  font-size: 1.1rem;
  flex: 1;
  font-weight: 700;
  text-shadow: 2px 2px 8px hsl(${COLORS.shadowColor});

  @media ${QUERIES.phoneAndUp} {
    font-size: 1.5rem;
  }
`;
const Results = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 70%;
  letter-spacing: 8px;
  color: ${COLORS.white};
  white-space: nowrap;
  text-shadow: 2px 2px 8px hsl(${COLORS.shadowColor});

  @media ${QUERIES.phoneAndUp} {
    flex: 2;
    font-size: 6rem;
    letter-spacing: 16px;
    padding-bottom: 16px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export default Matches;
