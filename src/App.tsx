import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Menu from './components-pages/Menu'
import Main from './components-pages/Main/Main'
import Sandbox from './components-pages/Sandbox'

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Menu />} />
				<Route path='/main' element={<Main />} />
				<Route path='/sandbox' element={<Sandbox />} />
			</Routes>
		</Router>
	)
}
