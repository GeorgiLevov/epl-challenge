import { addPointToUserScore, addNewUserBet, updateUserBets } from "./userFunctions";
import { getGameScoreFormatted, gameHasFinished } from "./gameFunctions";

export const initialBetObject = (id,homeTeam,awayTeam,result = "0",betStatus = "pending")=> {
	return {id:id,home:homeTeam,away:awayTeam,result:result,betStatus:betStatus}
}

export const setNewBet = (userBet) => {
  // First - preemptively check if game has finished
	if (gameHasFinished(userBet.id)) {
		
		// check if the user guessed the outcome correctly
		if (getGameScoreFormatted(userBet.id) === userBet.result){
			// user won the bet - they get a point added to their score
			userBet.betStatus = "won";

			addPointToUserScore();
		}
		// user lost the bet - they don't get a point added to their score
		else { userBet.betStatus = "lost"; }
	} 
	// if the game hasn't finished yet then the status will reflect 'pending'
	return addNewUserBet(userBet);
}

export const checkBets = (bethistory) => {
  const updatedBets = bethistory.map( (bet) => {
		const gameID = bet.id;

		//checking if the user bet isn't processed yet
		if (bet.betStatus==="pending") {
			//checking if game is finished
			if (gameHasFinished(bet.id)) {
				//comparing game score to bet score
				if (getGameScoreFormatted(gameID) === bet.result){
					bet.betStatus = "won";
					addPointToUserScore();
				}
				else { bet.betStatus = "lost";}
			}
		}
	return bet;
	});
	
	return updateUserBets(updatedBets);
}


