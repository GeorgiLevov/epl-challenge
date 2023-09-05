/* eslint-disable react/prop-types */
import { useNavigate} from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";



const GoBack = ({times=1}) => {

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-parseInt(times));
	}

return (
	<StyledBackButtonWrapper>
		<Button variant="outline" size="medium" onClick={goBack}>Back</Button>
	</StyledBackButtonWrapper>
)

}

export default GoBack;



const StyledBackButtonWrapper = styled.div`
	margin: 20px 0px 20px 0px;
`