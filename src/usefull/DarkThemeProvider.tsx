/**
 * DarkThemeProvider need to be wrapped around the app that uses it
 * <DarkThemeProvider content={<App />}>
 *
 * How to use:
 * import { useDarkTheme, useDarkThemeUpdate } from './DarkThemeProvider'
 * const isDarkTheme = useDarkTheme()
 * const toggleDarkTheme = useDarkThemeUpdater()
 */

import { useState, createContext, useContext } from 'react'

const DarkThemeContext = createContext<Boolean | null>(null)
const UpdateDarkThemeContext = createContext<Function | null>(null)

export function useDarkTheme() {
	return useContext(DarkThemeContext)
}

export function useDarkThemeUpdater() {
	return useContext(UpdateDarkThemeContext)
}

export function DarkThemeProvider({ content }: any) {
	const [isDarkTheme, setIsDarkTheme] = useState(true)
	
	function toggleDarkTheme() {
		setIsDarkTheme((previousValue) => !previousValue)
	}

	return (
		<DarkThemeContext.Provider value={isDarkTheme}>
			<UpdateDarkThemeContext.Provider value={toggleDarkTheme}>
				{content}
			</UpdateDarkThemeContext.Provider>
		</DarkThemeContext.Provider>
	)
}
