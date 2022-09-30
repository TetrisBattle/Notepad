import { makeAutoObservable } from 'mobx'
import Notepad from 'pages/Notepad'
import Git from 'pages/Notepad/Git'
import Terminal from 'pages/Notepad/Terminal'
import Regex from 'pages/Notepad/Regex'
import RemConverter from 'pages/RemConverter'

export default class AppStore {
	private _isDarkTheme = true
	private _isLoading = false
	private _routes = [
		{
			label: 'Notepad',
			path: '/notepad',
			element: <Notepad />,
			children: [
				{
					label: 'Git',
					path: 'git/:id',
					element: <Git />,
				},
				{
					label: 'Terminal',
					path: 'terminal',
					element: <Terminal />,
				},
				{
					label: 'Regex',
					path: 'regex',
					element: <Regex />,
				},
			],
		},
		{
			label: 'RemConverter',
			path: '/remconverter',
			element: <RemConverter />,
		},
	]

	constructor() {
		makeAutoObservable(this)
	}

	get isDarkTheme() {
		return this._isDarkTheme
	}

	toggleDarkTheme = () => {
		this._isDarkTheme = !this._isDarkTheme
	}

	get isLoading() {
		return this._isLoading
	}

	set isLoading(value) {
		this._isLoading = value
	}

	get routes() {
		return this._routes
	}
}
