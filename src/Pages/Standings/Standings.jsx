import React from 'react';
import { useFootballData } from '../../../db/context/footballData.context';

function Standings() {
    const {standings, getCurrentStandings} = useFootballData();


	React.useEffect(() => {
        getCurrentStandings();
	}, []);

	return <div>{standings && standings.map((team,index)=>{
        console.log(team)
        return <div key={index}>{team.team_name} / {team.position}</div>
    })}</div>;
}

export default Standings;
