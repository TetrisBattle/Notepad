import { useState } from 'react'
import { IconButton, IconButtonProps, Menu } from '@mui/material'

interface MenuIconButtonProps extends IconButtonProps {
	icon: JSX.Element
}

export const MenuIconButton = ({
	icon,
	children,
	...baseProps
}: MenuIconButtonProps) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	return (
		<>
			<IconButton
				onClick={(e: React.MouseEvent<HTMLElement>) =>
					setAnchorEl(e.currentTarget)
				}
				{...baseProps}
			>
				{icon}
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				open={!!anchorEl}
				onClick={() => setAnchorEl(null)}
				onClose={() => setAnchorEl(null)}
			>
				{children}
			</Menu>
		</>
	)
}
