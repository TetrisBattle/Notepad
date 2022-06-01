import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',
		// primary: {
		// 	main: '#009fd4',
		// 	light: '#7ed3f7',
		// 	dark: '#264180',
		// 	contrastText: '#ffffff'
		// },
	},
	components: {
		MuiSvgIcon: {
			styleOverrides: {
				root: {
					color: 'white'
				}
			},
		},
	},
})

export default theme
