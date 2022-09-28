import { makeAutoObservable } from 'mobx'
import AppStore from './AppStore'
import NotepadStore from './NotepadStore'

export default class RootStore {
	appStore = new AppStore()
	notepadStore = new NotepadStore()

	constructor() {
		makeAutoObservable(this)
	}
}
