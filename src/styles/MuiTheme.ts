import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',
		// primary: {
		// 	main: deepOrange[900],
		// 	light: red[700],
		// 	dark: '#840000',
		// 	contrastText: '#fff',
		// },
		// secondary: {
		// 	main: '#1cb7b7',
		// 	light: '#abdfe0',
		// 	dark: '#009793',
		// 	contrastText: '#fff',
		// },
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				sx: {
					fontWeight: 'bold',
					fontSize: '1rem',
				},
			}
		},
	},
})

export default theme
