import { useState } from "react"
import PageWrapper from "../../components/PageWrapper";
import { StyledForm } from "./Admin";
import styled from "styled-components";
import AllWeeks from "../../assets/games_by_week.json"
import { COLORS } from "../../Tools/CONSTANTS";
import Button from "../../components/Button";

const AdminPortal = () =>{

	const [weekNumber,setWeekNumber] = useState('');

	const handleWeekNumberInputUpdate = (ev) => {
		if (ev.target.value.length > 0){setWeekNumber(parseInt(ev.target.value))} 
		else {setWeekNumber('')}
	}

	const [currentWeekGamesArray,setCurrentWeekGamesArray] = useState([]);

  const showMatchWeekGames = () => {
		if (weekNumber){
		}
		else { console.error("You have not specified a number in the input field.")}
	}

	return (
		<>
			<PageWrapper>
				{ currentWeekGamesArray.length < 1 
					?
					<StyledForm id="matchweek-score-update" >
						<label>
							{/* Enter Password bruh */}
							<input
								className="input"
								type="text"
								required
								value={weekNumber}
								onChange={handleWeekNumberInputUpdate}
							/>
						</label>
						<button onClick={showMatchWeekGames}>Show Scores</button>
					</StyledForm>
					:
					<>
					<MatchWrapper>
						{
							currentWeekGamesArray.map( (game) => {
										return (
											<Match key={game.id} >
												{ game.homeScore === "" 
												? <label>Enter {game.home} score:
														<input
															className="input"
															type="text"
															required
														/>
													</label>
 
												: <><Team>{game.home}</Team> <Results>{game.homeScore}</Results></>
												}
												{ game.awayScore === "" 
												? <label>Enter {game.away} score:
														<input
															className="input"
															type="text"
															required
														/>
													</label>
 
												: <><Results>{game.awayScore}</Results> <Team>{game.away}</Team></>
												}
											</Match>
											)
							})
						}
						</MatchWrapper> 
					<Button variant="outline" size="large">Submit Scores</Button>
					</>				
					}

		</PageWrapper>
		</>
	
	)
} 

const MatchWrapper = styled.div`
	background-color: ${COLORS.white};
	width: 100%;
	max-width: 700px;
	display: flex;
	flex-direction:column;
	align-items:center;
  flex-wrap: nowrap;
	gap: 16px;
	z-index: 2;
	margin-bottom: 48px;
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

export default AdminPortal;