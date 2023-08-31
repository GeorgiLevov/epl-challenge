/* eslint-disable no-unused-vars */
import AllGames from "../assets/games.json"
import AllWeeks from "../assets/games_by_week.json"


export const getGameObject = (gameID) =>{
	return AllGames.filter(game=> String(game.id) === String(gameID))[0]
}

export const getGameScoreFormatted = (gameID) =>{
	const game = getGameObject(gameID);
	const subtractedGameResult = parseInt(game.homeScore) - parseInt(game.awayScore); 
	return subtractedGameResult > 0 ? "+1" : subtractedGameResult < 0 ? "-1" : "0"  
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
