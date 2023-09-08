/* eslint-disable react/prop-types */
import styled from "styled-components"

const PageWrapper = ({children}) => {

	return <StyledWrapper>{children}</StyledWrapper>
}

export default PageWrapper;

const StyledWrapper = styled.div`
		padding: 8px;
    padding-bottom: 64px;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
		z-index: 2;
`