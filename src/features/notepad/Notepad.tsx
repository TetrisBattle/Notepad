import { observer } from 'mobx-react-lite'
import { Button, Toolbar } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'
import { RouteOption } from 'routes'

export const Notepad = observer(() => {
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
