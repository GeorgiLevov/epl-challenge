import { useEffect, useState } from "react";
import styled from "styled-components";

import { checkBets } from "../../Functions/bettingFunctions";
import { getUserObject } from "../../Functions/userFunctions";

import GoBack from "../../components/GoBackBtn";
import List from "../../components/List";
import PageWrapper from "../../components/PageWrapper";
// import Team from "../../components/Team";
import { COLORS } from "../../Tools/CONSTANTS";
import GameBetPointer from "../../components/GameBetPointer";


const Score = () => {
  let {score, bethistory} = getUserObject();
	const [bets,setBets] = useState(false);
	const [betsVisible,setbetsVisible] = useState(true);

	useEffect(()=> {
		if (bethistory.length < 1){
			setbetsVisible(false);
		}
		else{
			checkBets(bethistory);
			setBets(true);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	useEffect(()=> {
			setbetsVisible(true);
	},[bets]);

	return (
		<PageWrapper>
		<h1>Total Score</h1>
		<h1 style={{fontSize: "30vh"}}>{score}</h1>
		{betsVisible && 
		<>
			<h1>Bets</h1>
			<List>
				{bethistory.map(GameResult)}
			</List>
		</>
		}

		<GoBack/>
		</PageWrapper>
	)
}

export default Score;

const GameResult = (bet,index) =>{
	// let teamStates;
	// switch (game.result) {
	// 	case '+1':
	// 		teamStates = ["winner","loser"];
	// 		break;
	// 		case '-1':
	// 			teamStates = ["loser","winner"];
	// 		break;
	// 		case '0':
	// 		teamStates = ["drawn","drawn"];
	// 		break;
	// 		default:
	// 		teamStates = ["pending","pending"];
	// }
	
	let gameState;
	switch (bet.gameResult) {
		case '+1':
			// gameState = `linear-gradient(90deg, ${COLORS.green} 40%, ${COLORS.red} 60%)`;
			gameState = `linear-gradient(90deg, ${COLORS.green} 40%, ${COLORS.white} 40%, ${COLORS.white} 60%, ${COLORS.red} 60%)`;
			break;
			case '-1':
				// gameState = `linear-gradient(90deg, ${COLORS.red} 40%, ${COLORS.green} 60%)`;
				gameState = `linear-gradient(90deg, ${COLORS.red} 40%, ${COLORS.white} 40%, ${COLORS.white} 60%, ${COLORS.green} 60%)`;
				break;
			case '0':
				// gameState = COLORS.yellow;
				gameState = `linear-gradient(90deg, ${COLORS.yellow} 40%, ${COLORS.white} 40%, ${COLORS.white} 60%, ${COLORS.yellow} 60%)`;
				break;
			default:
			// gameState = COLORS.blue;
			gameState = `linear-gradient(90deg, ${COLORS.blue} 40%, ${COLORS.white} 40%, ${COLORS.white} 60%, ${COLORS.blue} 60%)`;

	}
	return (
		<>
			<StyledGameResult key={index} style={{ '--color': gameState }}>
				<div><span>{bet.home}</span></div> <GameBetPointer bet={bet.result} game={bet.gameResult}/> <div><span>{bet.away}</span></div>
				</StyledGameResult>
		</>
)}


const StyledGameResult = styled.p`
	/* border-bottom: 5px solid; */
	background: var(--color);
  /* border-image-slice: 1; */
	/* border-image-source: var(--color); */
	display: flex;
	justify-content: space-around;
	align-items: center;

	> * {
	  display: inline;
		text-align: center;
		font-size: 1.25rem;
		/* flex: 1 1 0px; */
	}
	> div {
    margin: 0 auto;
    text-align: center;
    width: 27%;
	}
		
`