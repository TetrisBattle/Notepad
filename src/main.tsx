import { StoreProvider } from 'stores/StoreProvider.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from 'routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreProvider>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</StoreProvider>
	</React.StrictMode>
)
