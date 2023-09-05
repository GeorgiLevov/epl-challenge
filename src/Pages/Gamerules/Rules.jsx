/* eslint-disable react/no-unescaped-entities */
import GoBack from "../../components/GoBackBtn";
import Logo from "../../components/LOGO";
import PageWrapper from "../../components/PageWrapper";

const Rules = () => {
	return (
		<PageWrapper>
		<Logo/>
		<h1>Game Rules</h1>
		<article style={{padding:"24px",fontSize:"1.2rem"}}>
		<p>- You have access to all game fixtures from the 2023/2024 Premier league season.</p>
		<p>- You can navigate to each matchweek and bet on any of the games for that week.</p>
		<p>- You get points for guessing the outcome of games. You can only bet once - so be careful (don't misclick).</p>
		<p>- When a matchweek starts, you would no longer be allowed to bet on games from that week.</p>
		<p>- Game scores are updated every day games are played.</p>
		<p>- This app does not provide Live Score updates, although scores will be updated in a timely manner after each game finishes.</p>
		</article>

		<GoBack/>
		<br/><br/>
		</PageWrapper>
	)
}


export default Rules;