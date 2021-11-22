/**
 * DarkThemeProvider need to be wrapped around the app that uses it
 * <DarkThemeProvider content={<App />}>
 * 
 * How to use:
 * import { useDarkTheme, useDarkThemeUpdate } from "./DarkThemeProvider"
 * const isDarkTheme = useDarkTheme()
 * const toggleDarkTheme = useDarkThemeUpdater()
 */

ReactDOM.render(
	<ThemeProvider theme={HoituAppTheme}>
		<HoituApp />
	</ThemeProvider>,
	document.getElementById("root")
)

import React, { useState, createContext, useContext } from "react"

const DarkThemeContext = createContext()
const UpdateDarkThemeContext = createContext()

export const useDarkTheme = () => {
	return useContext(DarkThemeContext)
}

export const useDarkThemeUpdater = () => {
	return useContext(UpdateDarkThemeContext)
}

export const DarkThemeProvider = ({ content }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(true)

	const toggleDarkTheme = () => {
	setIsDarkTheme(previousValue => !previousValue)
}

return (
	<DarkThemeContext.Provider value={isDarkTheme}>
		<UpdateDarkThemeContext.Provider value={toggleDarkTheme}>
			{content}
		</UpdateDarkThemeContext.Provider>
	</DarkThemeContext.Provider>
	)
}

// How to use:
// import { useDarkTheme, useDarkThemeUpdate } from "./DarkThemeProvider"
// const isDarkTheme = useDarkTheme()
// const toggleDarkTheme = useDarkThemeUpdater()
