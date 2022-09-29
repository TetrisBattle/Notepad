import { Link, useLocation } from 'react-router-dom'
import { AppBar, Toolbar, Button, MenuItem, Box } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import MenuIconButton from './MenuIconButton'
import DarkThemeIconButton from './DarkThemeIconButton'
import { ReactComponent as Logo } from 'icons/Logo.svg'
import { useStoreContext } from 'contexts/StoreContext'
import { observer } from 'mobx-react-lite'

const Header = () => {
	const { appStore } = useStoreContext()
	const location = useLocation()

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
						{appStore.pages.map((page) => {
							return (
									<Button
									key={page.path}
									component={Link}
									to={page.defaultPath ? page.defaultPath : page.path}
									variant='text'
									sx={{
										'&:hover': { bgcolor: 'transparent' },
										fontSize: '1.25rem',
										color: (theme) => {
											const pathRegex = new RegExp(page.path, 'g')
											if (theme.palette.mode === 'dark') {
												return pathRegex.test(location.pathname)
													? theme.palette.primary.main
													: 'inherit'
											} else return theme.palette.primary.contrastText
										},
									}}
								>
									{page.id}
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
					{appStore.pages.map((page) => (
						<MenuItem
							key={page.path}
							component={Link}
							to={page.path}
							sx={{
								color: (theme) =>
									page.path === location.pathname
										? theme.palette.primary.main
										: theme.palette.text.primary,
							}}
						>
							{page.id}
						</MenuItem>
					))}
				</MenuIconButton>
				<DarkThemeIconButton sx={{ color: 'inherit' }} />
			</Toolbar>
		</AppBar>
	)
}

export default observer(Header)
