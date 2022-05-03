import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Menu from 'pages/Menu'
import Notepad from 'pages/Notepad/Notepad'
import RemConverter from 'pages/RemConverter'
import Sandbox from 'pages/Sandbox/Sandbox'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Navigate replace to="/Menu" />} />
				<Route exact path='/Menu' element={<Menu />} />
				<Route exact path='/Notepad' element={<Notepad />} />
				<Route exact path='/RemConverter' element={<RemConverter />} />
				<Route exact path='/Sandbox' element={<Sandbox />} />
			</Routes>
		</Router>
	)
}
