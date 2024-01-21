import { Outlet } from 'react-router-dom'
import { Header } from 'features/header/Header'

export const App = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
