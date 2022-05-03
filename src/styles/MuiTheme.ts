import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
	components: {
		MuiAccordionDetails: {
			styleOverrides: {
				root: {
					backgroundColor: '#303030',
					padding: '.75rem 1rem'
				}
			},
		},
	},
})

export default theme
