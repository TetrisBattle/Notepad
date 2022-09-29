import { makeAutoObservable } from 'mobx'
import Notepad from 'pages/Notepad'
import RemConverter from 'pages/RemConverter'

export interface Page {
	id: string
	path: string
	defaultPath?: string
	element: React.ReactElement
}

export default class AppStore {
	private _isDarkTheme = true
	private _isLoading = false
	private _pages: Page[] = [
		{ id: 'Notepad', path: '/Notepad', defaultPath: '/Notepad/Git', element: <Notepad /> },
		{ id: 'RemConverter', path: '/RemConverter', element: <RemConverter /> },
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

	get pages() {
		return this._pages
	}
}
