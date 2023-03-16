import { observer } from 'mobx-react-lite'
import { Box, Button, Toolbar } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import { NavLink, Outlet } from 'react-router-dom'
import NotFound from './NotFound'

function Notepad() {
	const { appStore } = useStoreContext()
	const gitRoutes = appStore.routes.find(
		(route) => route.label === 'Notepad'
	)?.children
	if (!gitRoutes) return <NotFound />

	return (
		<Box>
			<Toolbar
				sx={{
					borderBottom: 'solid 1px grey',
					justifyContent: 'center',
				}}
			>
				{gitRoutes.map((route) => {
					let path = route.path
					if (route.path === 'git/:id') {
						path = 'git'
					}

					return (
						<Button
							key={route.path}
							component={NavLink}
							to={path}
							variant='text'
							sx={{
								fontSize: 20,
								color: 'inherit',
								'&.active': (theme) => ({
									color: theme.palette.primary.main,
								}),
							}}
						>
							{route.label}
						</Button>
					)
				})}
			</Toolbar>
			<Outlet />
		</Box>
	)
}

export default observer(Notepad)
