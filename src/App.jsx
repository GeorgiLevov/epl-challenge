import { Routes, Route, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import Home from './Pages/Homepage'
import Weeks from './Pages/Matchweeks'
import Matches from './Pages/Matchlist'
import GameVote from './Pages/GameVote'
import Signup from './Pages/Signup Page'
import Score from './Pages/Scorepage'
import Rules from './Pages/Gamerules'
import PageNotFound from './Pages/NotFound'


function App() {
	const location = useLocation();

  return (
    <StyledApp>
    <Routes location={location} key={location.pathname}>
			{/* Routes */}
			<Route path="/" element={<Home/>} />
			<Route path="/signup" element={<Signup/>} />
			<Route path="/rules" element={<Rules/> } />
			<Route path="/score" element={<Score/> } />
			<Route path="/weeks" element={<Weeks/> } />
			<Route path="/weeks/:id" element={<Matches/>} />
			<Route path="/games" element={<Matches/>} />
			<Route path="/game/:id" element={<GameVote/>} />
			{/* 404 page */}
			<Route path="*" element={<PageNotFound/> } />
    </Routes>
    </StyledApp>
  )
}

export default App;

const StyledApp = styled.div`
height: 100%;
height: 100dvh;
`