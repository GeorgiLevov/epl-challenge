import styled from "styled-components/macro";
import { version } from "../../package.json";

const Footer = () => {
  return <StyledFooter>{version}</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 8px 12px;
  letter-spacing: 2px;
`;
