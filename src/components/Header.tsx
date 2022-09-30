import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Button, MenuItem, Box } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import MenuIconButton from './MenuIconButton'
import DarkThemeIconButton from './DarkThemeIconButton'
import { ReactComponent as Logo } from 'icons/Logo.svg'
import { observer } from 'mobx-react-lite'
import { useStoreContext } from 'contexts/StoreContext'

const Header = () => {
	const { appStore } = useStoreContext()

	return (
		<AppBar sx={{ backgroundImage: 'none', borderBottom: 'solid 1px grey' }}>
			<Toolbar sx={{ p: 1 }}>
				<Logo
					style={{
						height: 48,
						width: 48,
						marginRight: 'auto',
					}}
				/>
				<Box
					sx={{
						display: {
							xs: 'none',
							sm: 'block',
						},
					}}
				>
					<Box sx={{ pr: 1 }}>
						{appStore.routes.map((route) => {
							return (
								<Button
									key={route.path}
									component={NavLink}
									to={route.path}
									variant='text'
									sx={(theme) => ({
										'&:hover': { bgcolor: 'transparent' },
										fontSize: '1.25rem',
										color: 'inherit',
										'&.active': theme.palette.mode === 'dark' && {
											color: theme.palette.primary.main,
										},
									})}
								>
									{route.label}
								</Button>
							)
						})}
					</Box>
				</Box>
				<MenuIconButton
					sx={{
						color: 'inherit',
						display: {
							sm: 'none',
						},
					}}
					icon={<MenuIcon />}
				>
					{appStore.routes.map((route) => (
						<MenuItem
							key={route.path}
							component={NavLink}
							to={route.path}
							sx={{
								fontWeight: 600,
								'&.active': (theme) => ({
									color: theme.palette.primary.main,
								}),
							}}
						>
							{route.label}
						</MenuItem>
					))}
				</MenuIconButton>
				<DarkThemeIconButton sx={{ color: 'inherit' }} />
			</Toolbar>
		</AppBar>
	)
}

export default observer(Header)
