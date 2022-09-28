import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, MenuItem, Box } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import MenuIconButton from './MenuIconButton'
import DarkThemeIconButton from './DarkThemeIconButton'
import { ReactComponent as Logo } from 'icons/Logo.svg'
import { useStoreContext } from 'contexts/StoreContext'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const Header = () => {
	const { appStore } = useStoreContext()
	useEffect(() => {}, [appStore.selectedPage])

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
						{appStore.pages.map((page) => (
							<Button
								key={page.path}
								onClick={() => (appStore.selectedPage = page)}
								component={Link}
								to={page.path}
								variant='text'
								sx={{
									'&:hover': { bgcolor: 'transparent' },
									fontSize: '1.25rem',
									color: (theme) => {
										if (theme.palette.mode === 'dark') {
											return appStore.selectedPage.id === page.id
												? 'primary'
												: 'inherit'
										} else return theme.palette.primary.contrastText
									},
								}}
							>
								{page.id}
							</Button>
						))}
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
							onClick={() => (appStore.selectedPage = page)}
							component={Link}
							to={page.path}
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
