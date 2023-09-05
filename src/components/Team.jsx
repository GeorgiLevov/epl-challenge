/* eslint-disable react/prop-types */
import styled from "styled-components"
import { COLORS } from "../Tools/CONSTANTS";

const TEAMSTATE = {
	winner: {
		"--color": COLORS.green,
	},
	loser: {
		"--color": COLORS.red,
	},
	drawn: {
		"--color": COLORS.yellow,
	},
	pending: {
		"--color": COLORS.blue,
	},
}

const Team = ({status, children}) => {
	const styles = TEAMSTATE[status];

  if (typeof(styles)=== "undefined") {
		throw new Error(`Unrecognized Team gameState: ${status}`);
  }

	return <StyledTeam style={styles} >{children}</StyledTeam>
}

export default Team;


const StyledTeam = styled.p`
display: inline;
border-bottom: 4px solid var(--color);
border-radius: 4px;
`