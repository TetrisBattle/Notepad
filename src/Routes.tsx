import { Dnd } from 'features/Dnd'
import { Home } from 'features/Home'
import { NotFound } from 'features/NotFound'
import {
	Navigate,
	Outlet,
	RouteObject,
	createBrowserRouter,
} from 'react-router-dom'

export enum RouteOption {
	NotFound = '/404',
	Home = '/home',
	DnD = '/dnd',
}

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <Outlet />,
		children: [
			{ path: RouteOption.NotFound, element: <NotFound /> },
			{
				path: '*',
				element: <Navigate replace to={RouteOption.NotFound} />,
			},
			{ path: '/', element: <Navigate replace to={RouteOption.Home} /> },
			{ path: RouteOption.Home, element: <Home /> },
			{ path: RouteOption.DnD, element: <Dnd /> },
		],
	},
]

export const router = createBrowserRouter(routes)

export const routeToTitle = (route: RouteOption): string => {
	return route[1].toUpperCase() + route.slice(2)
}
