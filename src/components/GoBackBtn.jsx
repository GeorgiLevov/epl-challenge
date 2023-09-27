/* eslint-disable react/prop-types */
import { useNavigate} from "react-router-dom";
import Button from "./Button";
import BackButtonPNG from "../assets/go-back-arrow.svg"
import Picture from "./Picture";


const GoBack = ({times=1}) => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-parseInt(times));
	}

return (
	
		<Button variant="backButton" onClick={goBack}><Picture source1x={BackButtonPNG}/></Button>
)

}

export default GoBack;
