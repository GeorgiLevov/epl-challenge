/* eslint-disable react/prop-types */
import Picture from "./Picture";


import BetDrawWin from "../assets/drawn-arrows-green.png"
import BetDrawLose from "../assets/drawn-arrows-red.png"
import BetDrawPending from "../assets/drawn-arrows-pending.png"

import BetHomeWin from "../assets/left-arrow-green.png"
import BetHomeLose from "../assets/left-arrow-red.png"
import BetHomePending from "../assets/left-arrow-pending.png"

import BetAwayWin from "../assets/right-arrow-green.png"
import BetAwayLose from "../assets/right-arrow-red.png"
import BetAwayPending from "../assets/right-arrow-pending.png"
import styled from "styled-components";

const GameBetPointer = ({bet, game}) => {
	let arrowToShow;
	if(bet==="+1") {
		if (game ==="pending"){
			arrowToShow = BetHomePending;
		}
		else if (game ==="+1"){
			arrowToShow = BetHomeWin;
		}
		else {
			arrowToShow = BetHomeLose;
		}
	}
	else if (bet==="-1") {
		if (game ==="pending"){
			arrowToShow = BetAwayPending;
		}
		else if (game ==="-1"){
			arrowToShow = BetAwayWin;
		}
		else {
			arrowToShow = BetAwayLose;
		}
	}
	else if (bet==="0") {
		if (game ==="pending"){
			arrowToShow = BetDrawPending;
		}
		else if (game ==="0"){
			arrowToShow = BetDrawWin;
		}
		else {
			arrowToShow = BetDrawLose;
		}
	}
	
	return (
		<StyledBetPointer source1x={arrowToShow}/>
	)
}

export default GameBetPointer;

const StyledBetPointer = styled(Picture)`
	width: 50%;
	max-width: 64px;
	margin: 0 auto;
`