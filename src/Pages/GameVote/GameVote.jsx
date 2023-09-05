/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams,useSearchParams } from "react-router-dom";
import { setNewBet } from "../../Functions/bettingFunctions";
import { checkIfAlreadyBet, getUserObject } from "../../Functions/userFunctions";
import { initialBetObject } from "../../Functions/bettingFunctions";
import GoBack from "../../components/GoBackBtn";

import Games from "../../assets/games.json"
import "./GameVote.css"
import PageWrapper from "../../components/PageWrapper";

const GameVote = () => {
	const {id} = useParams();
	let game = Games.filter(game => game.id === String(id))[0];
	const user = getUserObject();
	
	const [disableBetting,setDisableBetting] = useState(false);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(()=> {
    if (user.bethistory[0] !== null) {
			if(checkIfAlreadyBet(game.id)){
				setDisableBetting(true);
			}
			if(searchParams.get('d')){
				setDisableBetting(true);
				
				searchParams.delete('d');
				setSearchParams(searchParams);
			}
		}
	},[])
	
	useEffect(()=> {
		
		
		
	},[])

	const handleVote = (vote) => {
		const betObject = initialBetObject(game.id,game.home,game.away,vote);
		
		setNewBet(betObject);
		setDisableBetting(true);
	}

return (
	<PageWrapper>
	{ game && 
    (<div className="bet-container">
			{disableBetting ? <button disabled>Bet on {game.home}</button> : <button onClick={()=>handleVote("+1")}>Bet on {game.home}</button> } 
			{disableBetting ? <button disabled>Bet on Draw</button>	 : <button onClick={()=>handleVote("0")}>Bet on Draw</button>	 } 
			{disableBetting ? <button disabled>Bet on {game.away}</button> : <button onClick={()=>handleVote("-1")}>Bet on {game.away}</button> } 
		</div>)
	}
	<GoBack/>	
	</PageWrapper>
)
}


export default GameVote;

