import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import MuiTheme from 'styles/MuiTheme'

export default function MuiThemeProvider({ children }) {
	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={MuiTheme}>
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	)
}
