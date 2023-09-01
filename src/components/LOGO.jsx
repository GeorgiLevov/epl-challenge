/* eslint-disable react/prop-types */

import styled from 'styled-components';
import epl_logo_1x from '../assets/epl-logo-1x.png'
import epl_logo_2x from '../assets/epl-logo-2x.png'
import epl_logo_3x from '../assets/epl-logo-3x.png'
import Picture from './Picture';

const Logo = () => {

	return (
		<StyledLogo source1x={epl_logo_1x} source2x={epl_logo_2x} source3x={epl_logo_3x} />
	)
}
export default Logo;


const StyledLogo = styled(Picture)`
	display: block;
	max-height: 30vh;
	margin-bottom: 20px;
`