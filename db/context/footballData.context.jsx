import { createContext, useContext, useEffect, useState } from 'react';
import { databases } from '../appwrite';
import catchError from '../../src/Functions/catchError';

import { COLLECTIONS_CONFIG, PROJECT_CONFIG } from '../api.config';


const footballDataContext = createContext();

export function useFootballData() {
	return useContext(footballDataContext);
}

export function FootballDataProvider({ children }) {

    const [standings, setStandings] = useState({});
    const [teams, setTeams] = useState({});
    const [matches, setMatches] = useState({});

    const getStandings = async () => {
        const [standingsError, standingsResponse] = await catchError(databases.listDocuments(PROJECT_CONFIG.EPL_PROJECT_DATABASE_KEY, COLLECTIONS_CONFIG.EPL_PROJECT_STANDINGS_COLLECTION));
        if (standingsError){
            console.log('Error fetching db standings:', standingsError);
        }
        else{
            setStandings(standingsResponse.documents[0].data);
        }
    }
    
    const getMatches = async () => {
        const [matchesError, matchesResponse] = await catchError(databases.listDocuments(PROJECT_CONFIG.EPL_PROJECT_DATABASE_KEY, COLLECTIONS_CONFIG.EPL_PROJECT_MATCHES_COLLECTION));
        if (matchesError){
            console.log('Error fetching db matches:', matchesError);
        } else {
            setMatches(matchesResponse.documents[0].data);
        }
    }
      
    const getTeamData = async () => {
    const [teamsError, teamsResponse] = await catchError(databases.listDocuments(PROJECT_CONFIG.EPL_PROJECT_DATABASE_KEY, COLLECTIONS_CONFIG.EPL_PROJECT_TEAMS_COLLECTION));
        if(teamsError){
        console.log('Error fetching db teams:', teamsError)
    } else {
        setTeams(teamsResponse.documents[0].data);
        }
    };
      
	useEffect(() => {
        getStandings();
        getMatches();
        getTeamData();
	}, []);

	return (
		<footballDataContext.Provider
			value={{
				standings,
                teams,
                matches
			}}>
			{children}
		</footballDataContext.Provider>
	);
}
