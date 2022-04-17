import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const colorDisabled = '#7e7e7e'

const colors = {
	primary: {
		main: red[900],
		light: red[700],
		dark: '#840000',
		contrastText: '#fff',
		disabled: colorDisabled,
	},
	secondary: {
		main: '#1cb7b7',
		light: '#abdfe0',
		dark: '#009793',
		contrastText: '#fff',
		disabled: colorDisabled,
	},
	text: {
		highEmphasis: '#333',
		mediumEmphasis: '#c4c4c4',
		disabled: colorDisabled,
	},
}

const theme = createTheme({
	palette: {
		mode: 'light',
		...colors,
	},
	typography: {
		fontFamily: 'Roboto, Titillium Web, Arial, sans-serif',
		fontSize: 16,
		h1: {
			fontSize: 36,
			fontWeight: 'bold',
		},
		h2: {
			fontSize: 24,
			fontWeight: 'bold',
		},
		h3: {
			fontSize: 20,
			fontWeight: 'bold',
		},
		h4: {
			fontSize: 16,
			fontWeight: 'bold',
		},
	},
	components: {
		MuiTypography: {
			styleOverrides: {
				root: {
					color: colors.text.highEmphasis,
				},
			}
		},
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				sx: {
					fontWeight: 'bold',
					fontSize: '1rem',
				},
			}
		},
		MuiAppBar: {
			defaultProps: {
				position: 'sticky',
				sx: {
					height: '4.5rem',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
				},
			},
		},
	},
})

export default theme
