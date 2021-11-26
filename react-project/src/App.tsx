import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MenuPage from './components-pages/Menu'
import Sandbox from './components-pages/Sandbox'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<MenuPage />} />
				<Route path="/sandbox" element={<Sandbox />} />
			</Routes>
		</Router>
	)
}
