/* eslint-disable react/prop-types */
import { useNavigate} from "react-router-dom";
import Button from "./Button";
const GoBack = ({times=1}) => {

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-parseInt(times));
	}

return (<Button variant="outline" size="large" onClick={goBack}>Back</Button>)

}

export default GoBack;