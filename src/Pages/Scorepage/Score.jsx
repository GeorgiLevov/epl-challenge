import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import styled from "styled-components";

import { checkBets } from "../../Functions/bettingFunctions";
import { getUserObject } from "../../Functions/userFunctions";

import GoBack from "../../components/GoBackBtn";
import List from "../../components/List";
import PageWrapper from "../../components/PageWrapper";
// import Team from "../../components/Team";
import { COLORS } from "../../Tools/CONSTANTS";
import GameBetPointer from "../../components/GameBetPointer";
import Button from "../../components/Button";


const Score = () => {
  const count = useMotionValue(0);
  const finalScore = useTransform(count, Math.round);
	let {score, bethistory} = getUserObject();

	const [bets,setBets] = useState(false);
	const [showLastGames,setShowLastGames] = useState(true);
	const [betsVisible,setbetsVisible] = useState(true);

	useEffect(()=> {
		if (bethistory.length < 1){
			setbetsVisible(false);
		}
		else{
			checkBets(bethistory);
			setBets(true);
		}

		const animation = animate(count, parseInt(score), { duration: 6 });
		return animation.stop;
		
			// eslint-disable-next-line react-hooks/exhaustive-deps
	},[]);

	useEffect(()=> {
			setbetsVisible(true);
	},[bets]);


	const lastGames = (numGames) => bethistory.slice(0, numGames)
	const lastGamesCount = 10;

	return (
		<PageWrapper>
			<ScoreWrapper>
				<h1>Total Score</h1>
				<StyledScore>{finalScore}</StyledScore>
			</ScoreWrapper>
		{betsVisible && 
		<>
			{showLastGames 
			? <>
					<StyledHeading>Last {lastGamesCount} bets</StyledHeading>
					<List variant="scorelist">
						{lastGames(lastGamesCount).map(GameResult)}
					</List>
					{bethistory.length > 10 && <Button variant="outline" size="medium" onClick={()=>setShowLastGames(false)}>Show all bets</Button> }
				</>
			: <>
					<StyledHeading>All bets</StyledHeading>
					<List variant="scorelist">
						{bethistory.map(GameResult)}
					</List>
					<Button variant="outline" size="medium" onClick={()=>setShowLastGames(true)}>Show latest bets</Button>
			</>

			}
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
			gameState = `linear-gradient(90deg, ${COLORS.green} 40%, ${COLORS.transparent} 40%, ${COLORS.transparent} 60%, ${COLORS.red} 60%)`;
			break;
			case '-1':
				// gameState = `linear-gradient(90deg, ${COLORS.red} 40%, ${COLORS.green} 60%)`;
				gameState = `linear-gradient(90deg, ${COLORS.red} 40%, ${COLORS.transparent} 40%, ${COLORS.transparent} 60%, ${COLORS.green} 60%)`;
				break;
			case '0':
				// gameState = COLORS.yellow;
				gameState = `linear-gradient(90deg, ${COLORS.yellow} 40%, ${COLORS.transparent} 40%, ${COLORS.transparent} 60%, ${COLORS.yellow} 60%)`;
				break;
			default:
			// gameState = COLORS.blue;
			gameState = `linear-gradient(90deg, ${COLORS.blue} 40%, ${COLORS.transparent} 40%, ${COLORS.transparent} 60%, ${COLORS.blue} 60%)`;

	}
	return (
		<>
			<StyledGameResult key={index} style={{ '--color': gameState }}>
				<div><span>{bet.home}</span></div> <GameBetPointer bet={bet.result} game={bet.gameResult}/> <div><span>{bet.away}</span></div>
				</StyledGameResult>
		</>
)}


const StyledGameResult = styled.div`
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
		font-size: 1.1rem;
		/* flex: 1 1 0px; */
	}
	> div {
    margin: 0 auto;
    text-align: center;
    width: 27%;
	}		
`

const ScoreWrapper = styled.div`
margin: 0 auto;
margin-bottom: 20px;
text-align: center;
`

const StyledHeading = styled.h1`
margin-bottom: 24px;
`

const StyledScore = styled(motion.h1)`
	font-size: 13rem;
	font-weight: 700;
	text-align: center;
`