/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Logo from "../../components/LOGO";
import List from "../../components/List";
import WeeksObject from "../../assets/games_by_week.json"
import GoBack from "../../components/GoBackBtn";

const Weeks = () => {

	const weeksNames = Object.keys(WeeksObject);
	const weekValues = Object.values(WeeksObject);
	
  const matchweekLinks = weeksNames.map( (element,index) => {
		let voteBydate = weekValues[index][0].votebyDate;
		return (
			<Link key={index} to={`/weeks/${index+1}`}>
				{element}
				<p style={{fontSize:"0.8rem",textAlign:"center"}}>voting ends: {voteBydate}</p> 
			</Link> 
		)
	});


	return (
		<>
			<Logo />
			<List items={matchweekLinks} />
			<GoBack/>
		</>
	)
}
export default Weeks;