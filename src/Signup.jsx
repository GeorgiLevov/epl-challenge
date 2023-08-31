import './Signup.css'
import Logo from './LOGO';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { createUser } from './Functions/userFunctions';

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

if (localStorage.getItem('user-epl-stats') == null) {
	return (
		<>
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
		</>
	)
} else {
	return navigate("/")
}
	
}

export default Signup;