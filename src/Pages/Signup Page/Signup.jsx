import './Signup.css'
import Logo from '../../components/LOGO';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { createUser, getUserObject } from '../../Functions/userFunctions';
import PageWrapper from '../../components/PageWrapper';

const Signup = () => {
  const navigate = useNavigate();
  const [username,setUsername] = useState('')

	
	const handleUpdate = (ev) => {
		setUsername(ev.target.value);
	}
	const handleSubmit = (ev) => {
		ev.preventDefault();
		if (String(username).length){
			createUser(username);
			navigate("/");
		}
	}
if (getUserObject() === null) {
	return (
		<PageWrapper>
				<Logo />
				<form id="signup-form" onSubmit={handleSubmit}>
					<label>
						Your Name:
						<input
							className="input"
							type="text"
							required
							value={username}
							onChange={handleUpdate}
						/>
					</label>
					<button type="submit">Start Playing</button>
				</form>
		</PageWrapper>
	)
} else {
	return navigate("/")
}
	
}

export default Signup;