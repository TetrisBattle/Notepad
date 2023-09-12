import { makeAutoObservable } from 'mobx'
import { Notepad } from 'pages/Notepad'
import { Git } from 'pages/Notepad/Git'
import { Terminal } from 'pages/Notepad/Terminal'
import { Regex } from 'pages/Notepad/Regex'
import { RemConverter } from 'pages/RemConverter'

export class AppStore {
	isDarkMode = true
	isLoading = false
	routes = [
		{
			label: 'Notepad',
			path: '/notepad',
			element: Notepad,
			children: [
				{
					label: 'Git',
					path: 'git/:id',
					element: Git,
				},
				{
					label: 'Terminal',
					path: 'terminal',
					element: Terminal,
				},
				{
					label: 'Regex',
					path: 'regex',
					element: Regex,
				},
			],
		},
		{
			label: 'RemConverter',
			path: '/remconverter',
			element: RemConverter,
		},
	]

	constructor() {
		makeAutoObservable(this)
	}

	toggleDarkMode = () => {
		this.isDarkMode = !this.isDarkMode
	}

	setIsLoading(isLoading: boolean) {
		this.isLoading = isLoading
	}
}
