import { createContext, useContext } from 'react'
import RootStore from 'stores/RootStore'

const rootStore = new RootStore()
const StoreContext = createContext(rootStore)

interface StoreContextProviderProps {
	children: React.ReactNode
}

export function StoreContextProvider({ children }: StoreContextProviderProps) {
	return (
		<StoreContext.Provider value={rootStore}>
			{children}
		</StoreContext.Provider>
	)
}

export function useStoreContext() {
	return useContext(StoreContext)
}
