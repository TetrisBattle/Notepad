import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Content from './components/Content'
import Sandbox from './components/Sandbox'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Content />} />
				<Route path="/sandbox" element={<Sandbox />} />
			</Routes>
		</Router>
	)
}
