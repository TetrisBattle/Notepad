import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components-pages/Menu'
import Random from './components-pages/Random'
import Sandbox from './components-pages/Sandbox'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Menu />} />
				<Route path="/random" element={<Random />} />
				<Route path="/sandbox" element={<Sandbox />} />
			</Routes>
		</Router>
	)
}
