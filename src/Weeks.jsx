/* eslint-disable react/prop-types */

import Logo from "./LOGO";
import Nav from "./Nav";
import WeeksObject from "./assets/games_by_week.json"
import { Link } from "react-router-dom";
import GoBack from "./GoBackBtn";
import "./Weeks.css"

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
			<div className="main-content-container">
					<Logo/>
					<Nav items={matchweekLinks} />
			</div>
			<GoBack/>
		</>
	)
}
export default Weeks;