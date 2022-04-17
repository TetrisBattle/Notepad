import React from 'react'
import ReactDOM from 'react-dom'
import StoreProvider from 'providers/StoreProvider'
import MuiThemeProvider from 'providers/MuiThemeProvider'
import App from 'App'
import 'styles/scss/main.css'

ReactDOM.render(
	<React.StrictMode>
		<StoreProvider>
			<MuiThemeProvider>
				<App />
			</MuiThemeProvider>
		</StoreProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
