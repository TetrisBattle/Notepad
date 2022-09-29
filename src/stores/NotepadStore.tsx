import { makeAutoObservable } from 'mobx'
import { commands } from 'pages/Notepad/data/git'

export default class NotepadStore {
	private _pages = ['Git', 'Terminal', 'Regex']
	private _selectedPage = this._pages[0]
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

	get selectedPage() {
		return this._selectedPage
	}

	set selectedPage(value) {
		this._selectedPage = value
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
