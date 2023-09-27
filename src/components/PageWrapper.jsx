/* eslint-disable react/prop-types */
import styled from "styled-components"
import backgroundLight from "../assets/alternating-arrowhead-main-background.svg"
import { COLORS } from "../Tools/CONSTANTS";

const PageWrapper = ({children}) => {

	return <StyledWrapper>{children}</StyledWrapper>
}

export default PageWrapper;

const StyledWrapper = styled.div`
		padding: 8px;
    min-height: 100dvh;
    background-repeat: repeat;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
		z-index: 2;

		background-color: ${COLORS.offwhite};
		background-image: url(${backgroundLight});
`