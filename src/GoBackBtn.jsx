/* eslint-disable react/prop-types */
import { useNavigate} from "react-router-dom";

const GoBack = ({times=1}) => {

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-parseInt(times));
	}

return (<button style={{padding: "16px 40px", margin: "64px",}} onClick={goBack}>Back</button>)

}

export default GoBack;