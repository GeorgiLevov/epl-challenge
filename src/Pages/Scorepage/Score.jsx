import { getUserObject } from "../../Functions/userFunctions";
import { checkBets } from "../../Functions/bettingFunctions";

import GoBack from "../../components/GoBackBtn";
import List from "../../components/List";
import { useEffect, useState } from "react";

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
	},[]);

	useEffect(()=> {
			setbetsVisible(true);
	},[bets]);

	
	return (
		<>
		<h1>Total Score</h1>
		<h1 style={{fontSize: "30vh"}}>{score}</h1>
		{betsVisible && 
		<>
			<h1>Bets</h1>
			<List>
				{bethistory.map((game,index) => <>
				<li key={index}>
				<p>{game.home} : {game.away}</p>
				<strong><p style={{textAlign:"center",fontSize:"1rem"}}>{game.betStatus}</p></strong>
				</li>
				</>
				)}
			</List>
		</>
		}

		<GoBack/>
		</>
	)
}


export default Score;
