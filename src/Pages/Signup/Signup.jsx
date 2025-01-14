import "./Signup.css";
import Logo from "../../components/LOGO";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser, getUserObject } from "../../Functions/userFunctions";
import styled from "styled-components/macro";
import { COLORS } from "../../Tools/CONSTANTS";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleUpdate = (ev) => {
    setUsername(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (String(username).length) {
      createUser(username);
      navigate("/");
    }
  };
  if (getUserObject() === null) {
    return (
      <>
        <Logo />
        <StyledForm id="signup-form" onSubmit={handleSubmit}>
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
        </StyledForm>
      </>
    );
  } else {
    return navigate("/");
  }
};

export default Signup;

const StyledForm = styled.form`
  width: max-content;
  margin: 16px auto;
  border: 1px solid hsl(283, 58%, 21%);
  padding: 26px 32px 32px;
  border-radius: 2px;
  background-color: ${COLORS.offwhite};

  label {
    display: block;
    margin-bottom: 16px;
    text-align: center;
  }

  input {
    display: block;
    text-align: center;
    margin: 0 auto;
    width: 175px;
    border: 1px solid black;
    border-bottom-width: 2px;
    padding: 6px 8px;
    margin-top: 4px;
    border-radius: 2px 2px 3px 3px;

    &:focus {
      outline: 3px auto ${COLORS.primaryLight};
      outline-offset: 2px;
      border-color: transparent;
    }
  }

  button[type="submit"] {
    display: block;
    margin-top: 40px;
    width: 100%;
    background: ${COLORS.primary};
    color: ${COLORS.white};
    padding: 8px;
    border: none;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 3px;

    &:focus {
      outline: 3px auto ${COLORS.primary};
      background: ${COLORS.primary};
      outline-offset: 2px;
    }
  }
`;
