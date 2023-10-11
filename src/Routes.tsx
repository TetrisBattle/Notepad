import { NotFound } from 'features/NotFound'
import { Home } from 'features/Home'
import { Dnd } from 'features/Dnd'
import {
	Navigate,
	Outlet,
	RouteObject,
	createBrowserRouter,
} from 'react-router-dom'
import { Forms } from 'playground/form/components/FormsDashboard'
import { FormikForm } from 'playground/form/forms/formik/FormikForm'
import { ReactHookForm } from 'playground/form/forms/reactHookForm/ReactHookForm'

export enum RouteOption {
	NotFound = '/404',
	Home = '/home',
	Playground = '/playground',
	Forms = '/forms',
	FormikForm = '/formikForm',
	ReactHookForm = '/reactHookForm',
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
			{
				path: RouteOption.Playground,
				element: <div />,
				children: [
					{
						path: RouteOption.Forms,
						element: <Forms />,
						children: [
							{
								path: RouteOption.FormikForm,
								element: <FormikForm />,
							},
							{
								path: RouteOption.ReactHookForm,
								element: <ReactHookForm />,
							},
						],
					},
				],
			},
			{ path: RouteOption.DnD, element: <Dnd /> },
		],
	},
]

export const router = createBrowserRouter(routes)

export const routeToTitle = (route: RouteOption): string => {
	return route[1].toUpperCase() + route.slice(2)
}
