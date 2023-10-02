/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from 'styled-components';
import eplLogo1x from '../assets/epl-logo-1x.png'
import eplLogo2x from '../assets/epl-logo-2x.png'
import eplLogo3x from '../assets/epl-logo-3x.png'
import eplLogoSvg from '../assets/premier-league-lion.svg'
import eplBackgroundSvg from '../assets/epl_background.svg'
import Picture from './Picture';
import { COLORS } from '../Tools/CONSTANTS';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Logo = () => {

	
	return (
		// <StyledLogo source1x={epl_logo_1x} source2x={epl_logo_2x} source3x={epl_logo_3x} />	

			<StyledLink to="/">
				<StyledLogo source1x={eplLogoSvg} />
			</StyledLink>
	)
}
export default Logo;

const StyledLink = styled(Link)`
  width: 100%;
	display: contents;
	margin: 0px;
	padding: 0px;
	`

const StyledLogo = styled(Picture)`
	max-height: 30vh;
	margin-bottom: 20px; 
	background-image: url(${eplBackgroundSvg});
	background-size: 112.5% 112.5%;
	background-repeat: no-repeat;
	background-position: center;
`