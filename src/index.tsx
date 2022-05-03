import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@mui/material/styles'
import MuiTheme from 'styles/MuiTheme'
import App from 'App'
import 'styles/sass/main.css'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={MuiTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
