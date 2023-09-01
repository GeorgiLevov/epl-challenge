import { Link } from "react-router-dom";

const PageNotFound = () => {

return(
	<article 
	style={{
		display:"flex",
		flexDirection:"column",
		flexWrap: "nowrap",
		alignContent: "center",
    justifyContent: "center",
    alignItems: "center"}}>

		<h1 style={{fontSize:"3rem",margin:"64px"}}>ERROR - Page Not Found</h1>
		<br/><br/>
		<Link to="/"><h1>Back to home</h1></Link>
	</article>
)
}

export default PageNotFound;