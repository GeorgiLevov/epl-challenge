import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { checkIfNewUser, getUserObject, retroUpdateGameResults } from '../../Functions/userFunctions';
import List from '../../components/List'
import Logo from '../../components/LOGO';
import Button from '../../components/Button';
import Footer from "../../components/Footer";
import styled from "styled-components";
import PageWrapper from "../../components/PageWrapper";
import { getAllGames } from "../../Functions/gameFunctions";


const Home = () => {
	const [loggedIn,setLoggedIn] = useState(false);
	const [user,setUser] = useState({username: "Guest"});
  const navigate = useNavigate();

	const greetings = ["Welcome","Hello there","Hi there", "Hey", "Good day", "Greetings"];
	let currentGreeting = greetings[(Math.floor(Math.random() * greetings.length))]

	// const paths_v0_3 = ['Score','Weeks','Rules','Teams'];
	const paths_v0_2 = ['Score','Weeks','Rules'];
	// const paths_v0_1 = ['Weeks','Score'];

  const links = paths_v0_2.map((element,index) => {
		return (
						<Link tabIndex="-1" key={index} to={`/${element.toLowerCase()}`}>
							<Button variant="fill" size="large">{element}</Button>
						</Link>
					)
	});

	useEffect(() => {
		
		if (checkIfNewUser()) {
			navigate("./signup", { relative: "path" });
		}
		else {
			setLoggedIn(true);
			setUser(getUserObject());

			// getAllGames();
			// retroUpdateGameResults(getUserObject().bethistory)
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
		{ loggedIn 
		? <PageWrapper>
			<Logo />
			<StyledGreeting>{currentGreeting} {user.username}</StyledGreeting>
			<List items={links}/> 
			</PageWrapper>
		:<PageWrapper>
			<h2>Please Sign up to play below</h2>
			<br/><br/>
			<button><Link to="/signup">Take me to Sign up</Link></button>
    </PageWrapper>
		}
		<Footer/>
		</>
	)

}

export default Home;


const StyledGreeting = styled.h1`
	font-size: 2.25rem;
	margin: 20px;
`