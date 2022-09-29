import { createTheme } from '@mui/material/styles'
import defaultTheme from './defaultTheme'

const muiTheme = (isDarkTheme: boolean) => {
	const theme = defaultTheme(isDarkTheme)

	return createTheme(theme, {
		components: {
			// MuiButton: {
			// 	defaultProps: {
			// 		variant: 'contained',
			// 	},
			// 	styleOverrides: {
			// 		root: {
			// 			padding: '4px 14px',
			// 		},
			// 	},
			// },
		},
	})
}

export default muiTheme