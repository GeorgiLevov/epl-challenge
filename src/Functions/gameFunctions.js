/* eslint-disable no-unused-vars */
import AllWeeks from "../assets/games_by_week.json"
import { setBackup } from "./userFunctions";


export const getAllGames = (allGameData = AllWeeks) => {
	const allGameArray = Object.values(allGameData);
	const allGames = allGameArray.map(gameWeek => {
		return gameWeek.slice(1);
	});
	
	return allGames.flat();
}

export const getGameObject = (gameID) => {
	const allGames = getAllGames();
	return allGames.filter(game=> String(game.id) === String(gameID))[0]
}

export const checkLast10Pending = (lastBets) => {
	if (lastBets.length === 10 && lastBets.every(game=> game.betStatus === "pending")){
		return setBackup();
	}
	else return false
}

export const getGameScoreFormatted = (gameID) =>{
	const game = getGameObject(gameID);
	if (game.homeScore !=="" && game.awayScore !=="")  {
		const subtractedGameResult = parseInt(game.homeScore) - parseInt(game.awayScore); 
		return subtractedGameResult > 0 ? "+1" : subtractedGameResult < 0 ? "-1" : "0"  
	}
	else {
		return "pending"  
	}
}

export const gameHasFinished = (gameID) => {
	const game = getGameObject(gameID);
	if (String(game.homeScore).length > 0 && String(game.awayScore).length > 0 ){
		return true
	}
	else {return false}
}

const getCurrentDate = () => {
	const d = new Date();

	let day = d.getDate();
	let month = d.getMonth() + 1;
	let year = d.getFullYear();
	let currentDate = `${month}/${day}/${year}`;

	return currentDate;
}

export const canStillBet = (matchWeekDate, current = getCurrentDate()) => {
  let date1 = new Date(current).getTime();
  let date2 = new Date(matchWeekDate).getTime();

  if (date1 < date2) {
		// yes - users can still make a bet
		return true
  } else if (date1 > date2) {
		// voting time passed, users can no longer bet
    return false
  } else {
		// last voting day, users can still vote
    return true
  }
};
