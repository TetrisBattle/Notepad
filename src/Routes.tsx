import { Navigate, createBrowserRouter } from 'react-router-dom'
import { App } from 'App'
import { NotFound } from 'features/NotFound'

import { Notepad } from 'pages/Notepad'
import { Git } from 'pages/Notepad/Git'
import { Terminal } from 'pages/Notepad/Terminal'
import { Regex } from 'pages/Notepad/Regex'

import { RemConverter } from 'pages/RemConverter'

import { Forms } from 'playground/forms/Forms'
import { FormikForm } from 'playground/forms/formik/FormikForm'
import { ReactHookForm } from 'playground/forms/reactHookForm/ReactHookForm'
import { Dnd } from 'features/Dnd'
import { Playground } from 'playground/Payground'

export enum RouteOption {
	NotFound = '/404',
	Notepad = '/notepad',
	Git = '/notepad/git',
	Terminal = '/notepad/terminal',
	Regex = '/notepad/regex',
	RemConverter = '/remConverter',
	Playground = '/playground',
	Forms = '/playground/forms',
	FormikForm = '/playground/forms/formikForm',
	ReactHookForm = '/playground/forms/reactHookForm',
	DnD = '/playground/forms/dnd',
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: RouteOption.NotFound, element: <NotFound /> },
			{
				path: '*',
				element: <Navigate replace to={RouteOption.NotFound} />,
			},
			{ path: '/', element: <Navigate replace to={RouteOption.Git} /> },
			{
				path: RouteOption.Notepad,
				element: <Notepad />,
				children: [
					{
						path: RouteOption.Notepad,
						element: (
							<Navigate replace to={RouteOption.Git + '/init'} />
						),
					},
					{
						path: RouteOption.Git,
						element: (
							<Navigate replace to={RouteOption.Git + '/init'} />
						),
					},
					{
						path: RouteOption.Git + '/:id',
						element: <Git />,
					},
					{
						path: RouteOption.Terminal,
						element: <Terminal />,
					},
					{
						path: RouteOption.Regex,
						element: <Regex />,
					},
				],
			},
			{
				path: RouteOption.RemConverter,
				element: <RemConverter />,
			},
			{
				path: RouteOption.Playground,
				element: <Playground />,
			},
			{
				path: RouteOption.Forms,
				element: <Forms />,
			},
			{
				path: RouteOption.FormikForm,
				element: <FormikForm />,
			},
			{
				path: RouteOption.ReactHookForm,
				element: <ReactHookForm />,
			},
			{ path: RouteOption.DnD, element: <Dnd /> },
		],
	},
])

export const routeToTitle = (route: RouteOption): string => {
	return route[1].toUpperCase() + route.slice(2)
}
