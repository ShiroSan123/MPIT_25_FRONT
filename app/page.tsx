'use client';

import { HashRouter as Router, Routes, Route  } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile'
import LogIn from "./pages/LogIn";
import ChooseAuth from './pages/ChooseAuth'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/profile" element={<Profile />}/>
				<Route path="/LogIn" element={<LogIn />}/>
				<Route path="/ChooseAuth" element={<ChooseAuth />}/>
			</Routes>
		</Router>
	)
}

export default App