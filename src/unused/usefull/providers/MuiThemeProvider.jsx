import { ThemeProvider } from '@mui/material/styles'
import MuiTheme from 'styles/MuiTheme'

export default function MuiThemeProvider({ children }) {
	return (
		<ThemeProvider theme={MuiTheme}>
				{children}
		</ThemeProvider>
	)
}
