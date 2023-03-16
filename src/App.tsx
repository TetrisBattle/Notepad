import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom'
import { Backdrop, CircularProgress } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import Header from 'components/Header'

function AppRoutes() {
	const { appStore } = useStoreContext()

	return (
		<Routes>
			<Route path='*' element={<Navigate to='/notepad/git' />} />
			<Route path='/' element={<Navigate replace to='/notepad' />} />
			<Route
				path='/notepad'
				element={<Navigate replace to='/notepad/git/init' />}
			/>
			<Route
				path='/notepad/git'
				element={<Navigate replace to='/notepad/git/init' />}
			/>

			{appStore.routes.map((route) => {
				const recursion = (recursionRoute: typeof route) => {
					if (recursionRoute.children) {
						return (
							<Route
								key={recursionRoute.path}
								path={`/${recursionRoute.path}`}
								element={recursionRoute.element}
							>
								{recursionRoute.children.map((child) =>
									recursion(child)
								)}
							</Route>
						)
					}
					return (
						<Route
							key={recursionRoute.path}
							path={recursionRoute.path}
							element={recursionRoute.element}
						/>
					)
				}

				return recursion(route)
			})}
		</Routes>
	)
}

export default function App() {
	const { appStore } = useStoreContext()

	return (
		<Router>
			<Header />
			<AppRoutes />

			<Backdrop open={appStore.isLoading}>
				<CircularProgress />
			</Backdrop>
		</Router>
	)
}
