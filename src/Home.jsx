import Nav from './Nav'
import './Home.css'
import Logo from './LOGO';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { checkIfNewUser, getUserObject } from './Functions/userFunctions';


const Home = () => {
	const [loggedIn,setLoggedIn] = useState(false);
	const [user,setUser] = useState({username: "Guest"});
  const navigate = useNavigate();

	// const paths_v0_3 = ['Score','Weeks','Rules','Teams'];
	const paths_v0_2 = ['Score','Weeks','Rules'];
	// const paths_v0_1 = ['Weeks','Score'];

  const links = paths_v0_2.map((element,index) => {
		return <Link key={index} to={`/${element.toLowerCase()}`}><h3>{element}</h3></Link>
	});

	useEffect(() => {
		
		if (checkIfNewUser()) {
			navigate("./signup", { relative: "path" });
		}
		else {
			setLoggedIn(true);
			setUser(getUserObject());
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
		{ loggedIn 
		? <>
			<Logo />
			<h1>Welcome {user.username}!</h1>
			<Nav items={links}/> 
			</>
		:<>
			<h2>Please Sign up to play below</h2>
			<br/><br/>
			<button><Link to="/signup">Take me to Sign up</Link></button>
    </>
		}
		</>
	)

}

export default Home;