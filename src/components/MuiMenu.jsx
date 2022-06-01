import { useState } from 'react'
import { Button, Menu } from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'

export default function MuiMenu ({ children }) {
	const [anchorEl, setAnchorEl] = useState(null)
	const handleClose = () => setAnchorEl(null)

	return (
		<>
			<Button onClick={(e) => setAnchorEl(e.currentTarget)}>
				<MenuIcon />
			</Button>

			<Menu
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClose={handleClose}
			>{children}</Menu>
		</>
	)
}
