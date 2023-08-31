import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Weeks from './Weeks'
import Matches from './Matches'
import GameVote from './GameVote'
import Signup from './Signup'
import Score from './Score'
import Rules from './Rules'
import PageNotFound from './PageNotFound'
function App() {
	const location = useLocation();

  return (
    <>
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
    </>
  )
}

export default App;