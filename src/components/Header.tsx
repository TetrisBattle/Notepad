import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Box } from '@mui/material'
import { MenuIconButton } from './MenuIconButton'
import { DarkThemeIconButton } from './DarkThemeIconButton'
import { IconButton, Logo } from '@thng/react'
import { RouteOption } from 'Routes'
import { HeaderButton } from './HeaderButton'

export const Header = () => {
	return (
		<AppBar
			sx={{
				backgroundImage: 'none',
				borderBottom: 'solid 1px grey',
			}}
		>
			<Toolbar sx={{ pr: 1 }}>
				<Box sx={{ mr: 'auto', display: 'flex', alignItems: 'center' }}>
					<IconButton
						component={NavLink}
						to={RouteOption.Playground}
						size='small'
					>
						<Logo size={32} />
					</IconButton>
				</Box>
				<Box
					sx={{
						display: {
							xs: 'none',
							sm: 'block',
						},
					}}
				>
					<Box sx={{ pr: 1 }}>
						<HeaderButton
							path={RouteOption.Notepad}
							label='Notepad'
						/>
						<HeaderButton
							path={RouteOption.RemConverter}
							label='RemConverter'
						/>
					</Box>
				</Box>
				<MenuIconButton
					items={[
						{ path: RouteOption.Notepad, label: 'Notepad' },
						{
							path: RouteOption.RemConverter,
							label: 'RemConverter',
						},
					]}
				/>
				<DarkThemeIconButton sx={{ color: 'inherit' }} />
			</Toolbar>
		</AppBar>
	)
}
