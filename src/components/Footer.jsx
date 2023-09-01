import styled from "styled-components";
import {version} from '../../package.json'; 

const Footer = () => {
	return <StyledFooter>{version}</StyledFooter>;
}

export default Footer;

const StyledFooter = styled.footer`
	margin-left: auto;
	margin-top: auto;
	padding: 8px 12px;
`