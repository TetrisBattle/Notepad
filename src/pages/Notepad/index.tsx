import { observer } from 'mobx-react-lite'
import { Button, Toolbar } from '@mui/material'
// import { useStore } from 'hooks/useStore'
import { NavLink, Outlet } from 'react-router-dom'
// import { NotFound } from './NotFound'
import { RouteOption } from 'Routes'

export const Notepad = observer(() => {
	// const { appStore } = useStore()
	// const gitRoutes = appStore.routes.find((route) => route.label === 'Notepad')
	// 	?.children
	// if (!gitRoutes) return <NotFound />

	return (
		<>
			<Toolbar
				sx={{
					borderBottom: 'solid 1px grey',
					justifyContent: 'center',
				}}
			>
				<Button
					component={NavLink}
					to={RouteOption.Git}
					variant='text'
					sx={{
						fontSize: 20,
						color: 'inherit',
						'&.active': (theme) => ({
							color: theme.palette.primary.main,
						}),
					}}
				>
					Git
				</Button>
				<Button
					component={NavLink}
					to={RouteOption.Terminal}
					variant='text'
					sx={{
						fontSize: 20,
						color: 'inherit',
						'&.active': (theme) => ({
							color: theme.palette.primary.main,
						}),
					}}
				>
					Terminal
				</Button>
				<Button
					component={NavLink}
					to={RouteOption.Regex}
					variant='text'
					sx={{
						fontSize: 20,
						color: 'inherit',
						'&.active': (theme) => ({
							color: theme.palette.primary.main,
						}),
					}}
				>
					Regex
				</Button>
			</Toolbar>
			<Outlet />
		</>
	)
})
