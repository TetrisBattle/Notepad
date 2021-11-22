import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Menu'
import Sandbox from './components/Sandbox'


export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Header />} />
				<Route path="/sandbox" element={<Sandbox />} />
			</Routes>
		</Router>
	)
}
