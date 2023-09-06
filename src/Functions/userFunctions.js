import ls from 'localstorage-slim';
import { getGameScoreFormatted} from "./gameFunctions";

const setEncryption = false;
const userStorageKey = "user-epl-stats";
const initiateUserObject = (username)=> {return {username: username, score:'0', bethistory:[]}	}


export const checkIfNewUser = () => {
	return ls.get(userStorageKey, { decrypt: setEncryption }) == null;
}

export const checkIfAlreadyBet = (gameID) => {
	const user = getUserObject();
	const gameIDMatched = user.bethistory.filter(game=> game.id == gameID);

	if(gameIDMatched.length > 0) {return true}
	else {return false}
} 

export const createUser = (username) => {
	const newUser = initiateUserObject(username)

	ls.set(userStorageKey, newUser, { encrypt: setEncryption });
	// console.log('New User:',ls.get(userStorageKey, { decrypt: setEncryption }))
}

export const getUserObject = () => {
	if (!checkIfNewUser()){
		return ls.get(userStorageKey, { decrypt: setEncryption })
	}
	else return null;
}

export const addPointToUserScore = () => {
	const user = getUserObject();	
	const newScore = parseInt(user.score) + 1;
	user.score = newScore;
	
	ls.set(userStorageKey, user, { encrypt: setEncryption });
	// console.log('Updated User Points:',ls.get(userStorageKey, { decrypt: setEncryption }))
}

export const addNewUserBet = (newBet) => {
	const user = getUserObject();	
	user.bethistory = [newBet,...user.bethistory];
	
	ls.set(userStorageKey, user, { encrypt: setEncryption });
	// console.log('Updated User Bets:',ls.get(userStorageKey, { decrypt: setEncryption }))
}

export const updateUserBets = (newBetHistory) => {
	const user = getUserObject();
	user.bethistory = newBetHistory;
	ls.set(userStorageKey, user, { encrypt: setEncryption });
};

export const retroUpdateGameResults = (userBetHistory) => {
	// First - filter to games which don't have the game result field
	// Second - update to include the game result field
	// Last - update user data

	const newBetHistory = userBetHistory.map((bet) => {
		if(typeof(bet.gameResult) === "undefined") {
			const gameResult = getGameScoreFormatted(bet.id); 
			bet = {...bet, "gameResult": gameResult}
		}
		return bet
	})
	
	return updateUserBets(newBetHistory);
}