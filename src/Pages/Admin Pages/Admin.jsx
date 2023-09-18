import Logo from '../../components/LOGO';
import { useEffect, useState } from 'react';
import { getUserObject, checkIfAdmin } from '../../Functions/userFunctions';
import PageWrapper from '../../components/PageWrapper';
import styled from 'styled-components';
import AdminPortal from './AdminPortal';

// NEED TO CREATE HEADLESS FORM COMPONENT

const Admin = () => {

  const [adminpass,setAdminpass] = useState('')
  const [isAdmin,setIsAdmin] = useState(false)

		const handleInputUpdate = (ev) => {
		setAdminpass(ev.target.value);
	}
	const handleAdminLogin = (ev) => {
		ev.preventDefault();

		if (String(adminpass).length){
			console.log(adminpass)
			setIsAdmin(checkIfAdmin(adminpass));
			console.log(checkIfAdmin(adminpass));
		}
	}


	useEffect(()=> {
		const user = getUserObject();
		setIsAdmin(user.admin);
	},[])

	return (
		<PageWrapper>
				<Logo />

				{ isAdmin === false ?
					<StyledForm id="admin-login-form" >
						<label>
							{/* Enter Password bruh */}
							<input
								className="input"
								type="text"
								required
								placeholder="Enter Password bruhh..."
								value={adminpass}
								onChange={handleInputUpdate}
							/>
						</label>
						<button onClick={handleAdminLogin}>Log into Admin Panel</button>
					</StyledForm>
					:
					<AdminPortal>
					</AdminPortal>
					}

		</PageWrapper>
	)
}

export default Admin;

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;

		font-size: 1.5rem;
		gap: 24px;
`