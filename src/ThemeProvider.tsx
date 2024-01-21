import { ThemeOptions } from '@thng/react'
import { BaseThemeProvider } from '@thng/react'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

type ThemeProviderProps = {
	children: React.ReactNode
}

export const ThemeProvider = observer(({ children }: ThemeProviderProps) => {
	const {
		appStore: { isDarkMode },
	} = useStore()

	const theme: ThemeOptions = {
		palette: isDarkMode
			? {
					mode: 'dark',
					primary: {
						main: '#E07306',
					},
					secondary: {
						main: '#00C3ff',
					},
					background: {
						default: '#121416',
						paper: '#121416',
					},
				}
			: {
					mode: 'light',
				},
	}

	return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
})
