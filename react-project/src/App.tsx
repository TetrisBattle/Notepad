import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Index from './components-pages/Index'
import Sandbox from './components-pages/Sandbox'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/sandbox" element={<Sandbox />} />
			</Routes>
		</Router>
	)
}
