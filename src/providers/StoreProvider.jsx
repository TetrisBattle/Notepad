import { createContext } from 'react'
import { makeAutoObservable } from 'mobx';

class RootStore {
	constructor() {
		// empty

		makeAutoObservable(this)
	}
}

const rootStore = new RootStore()
export const StoreContext = createContext(rootStore)

export default function DataProvider({ children }) {
	return (
		<StoreContext.Provider value={rootStore}>
			{children}
		</StoreContext.Provider>
	)
}
