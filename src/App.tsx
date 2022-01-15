import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components-pages/Menu'
import Notepad from './components-pages/Notepad'
import RemConverter from './components-pages/RemConverter'
import Sandbox from './components-pages/Sandbox'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/notepad' element={<Notepad />} />
				<Route path='/RemConverter' element={<RemConverter />} />
				<Route path='/sandbox' element={<Sandbox />} />
			</Routes>
		</Router>
	)
}
