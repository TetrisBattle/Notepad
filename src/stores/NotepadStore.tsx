import { makeAutoObservable } from 'mobx'
import { commands } from 'pages/Notepad/data/git'
import Git from 'pages/Notepad/Git'
import Terminal from 'pages/Notepad/Terminal'
import Regex from 'pages/Notepad/Regex'
import { Page } from './AppStore'

export default class NotepadStore {
	private _pages: Page[] = [
		{ id: 'Git', path: '/Notepad/Git', defaultPath: '/Notepad/Git/Init', element: <Git /> },
		{ id: 'Terminal', path: '/Notepad/Terminal', element: <Terminal /> },
		{ id: 'Regex', path: '/Notepad/Regex', element: <Regex /> },
	]
	private _gitPages: string[] = []
	private _selectedGitPage = ''

	constructor() {
		for (const key in commands) {
			this._gitPages.push(key)
		}
		this._selectedGitPage = this._gitPages[0]

		makeAutoObservable(this)
	}

	get pages() {
		return this._pages
	}

	get gitPages() {
		return this._gitPages
	}

	get selectedGitPage() {
		return this._selectedGitPage
	}

	set selectedGitPage(value) {
		this._selectedGitPage = value
	}
}
