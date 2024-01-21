import { useState } from 'react'
import { IconButton, Menu } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { MenuItem } from '@thng/react'
import { NavLink } from 'react-router-dom'

type MenuIconButtonProps = {
	items: {
		path: string
		label: string
	}[]
}

export const MenuIconButton = ({ items }: MenuIconButtonProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	return (
		<>
			<IconButton
				onClick={(e: React.MouseEvent<HTMLElement>) =>
					setAnchorEl(e.currentTarget)
				}
				sx={{
					color: 'inherit',
					display: {
						sm: 'none',
					},
				}}
			>
				<MenuIcon />
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClick={() => setAnchorEl(null)}
				onClose={() => setAnchorEl(null)}
			>
				{items.map(({ path, label }) => (
					<MenuItem
						key={path}
						component={NavLink}
						to={path}
						sx={{
							fontWeight: 600,
							'&.active': (theme) => ({
								color: theme.palette.primary.main,
							}),
						}}
					>
						{label}
					</MenuItem>
				))}
			</Menu>
		</>
	)
}
