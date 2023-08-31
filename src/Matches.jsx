/* eslint-disable no-undef */
import { useParams, Link } from "react-router-dom";
import WeeksObject from "./assets/games_by_week.json"
import { canStillBet } from "./Functions/gameFunctions";
import './Matches.css'
import GoBack from "./GoBackBtn";
import styled from "styled-components/macro";

const Matches = () => {
  const {id} = useParams(); 

	const fixtures = WeeksObject[`Matchweek ${id}`];
	const votebyDate = fixtures[0].votebyDate;
  const votingAllowed = canStillBet(votebyDate);

	return (
		<>
			<MatchWrapper>
			<h1 style={{marginBottom:"20px"}}>Matchweek {id}</h1>
			<h2 style={{marginBottom:"20px"}}>last betting day: {votebyDate}</h2>
			{
				fixtures.map( (game,index) => {
					if (index > 0) {
						let gameLink = votingAllowed ? `../../game/${game.id}` : `../../game/${game.id}?d=true`
						if (votingAllowed){
							return <Link key={game.id} to={gameLink}><div className="match" >{game.home} vs {game.away}</div></Link>
						}
						else {
							
							return (
								<Match key={game.id} >
									<Team>{game.home}</Team>
									{ game.homeScore!== "" 
									? <Results>{game.homeScore}:{game.awayScore}</Results> 
									: <span>{game.homeScore}:{game.awayScore}</span>
									}
									<Team>{game.away}</Team>
								</Match>
								)
						}
						}
				})
			}		
			</MatchWrapper>
				<GoBack/>
		</>
	)
}

const MatchWrapper = styled.div`
	width: 100%;
	max-width: 700px;
	display: flex;
	flex-direction:column;
	align-items:center;
  flex-wrap: nowrap;
	gap: 16px;
`

const Match = styled.div`
	border-bottom: 1px solid;
	padding: 16px;
	text-align: center;
	width: inherit;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`
const Results = styled.div`
	font-size: 2.125rem;
	flex: 3;
	letter-spacing: 24px;
	padding-left: 4%;
	`
	const Team = styled.div`
	font-size: 1.1rem;
	flex: 2;
`

export default Matches;

