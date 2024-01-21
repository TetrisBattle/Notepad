import { makeAutoObservable } from 'mobx'

export class AppStore {
	isDarkMode = true
	isLoading = false

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
