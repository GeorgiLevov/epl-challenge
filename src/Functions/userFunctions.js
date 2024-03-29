import ls from 'localstorage-slim';
import { getGameScoreFormatted} from "./gameFunctions";


const setEncryption = false;
const userStorageKey = "user-epl-stats";
const backupStorageKey = "backup-epl-stats";
const adminPASS = import.meta.env.EPL__ADMIN_PASS;

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

export const setBackup = () => {
	if (!checkIfNewUser()){
		const user = getUserObject();	
		ls.set(backupStorageKey, user, { encrypt: setEncryption })
	}
	else return null;
}

export const addPointToUserScore = (pointsToAdd=1) => {
	const user = getUserObject();	
	const newScore = parseInt(user.score) + pointsToAdd;
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
export const setUserScore = (points) => {
	const user = getUserObject();
	user.score = points;
	ls.set(userStorageKey, user, { encrypt: setEncryption });
};

export const checkIfAdmin = (password) => {
	const user = getUserObject();

	if (password === adminPASS) {
		if(user.admin !== true) {
			user.admin = true
			ls.set(userStorageKey, user, { encrypt: setEncryption });
		}
		return true;
	}
	else {
		return false;
	}
}

export const retroUpdateGameResults = (userBetHistory) => {
	// First - filter to games which don't have the game result field
	// Second - update to include the game result field
	// Last - update user data

	const newBetHistory = userBetHistory.map((bet) => {
		if(typeof(bet.gameResult) === "undefined" || bet.gameResult === "pending" ) {
			const gameResult = getGameScoreFormatted(bet.id); 
			bet = {...bet, "gameResult": gameResult}
		}
		return bet
	})
	
	return updateUserBets(newBetHistory);
}