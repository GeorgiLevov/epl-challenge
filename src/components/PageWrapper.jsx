/* eslint-disable react/prop-types */
import styled from "styled-components"

const PageWrapper = ({children}) => {

	return <StyledWrapper>{children}</StyledWrapper>
}

export default PageWrapper;

const StyledWrapper = styled.div`
		padding: 8px;
    padding-bottom: 20px;
    height: inherit;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
`