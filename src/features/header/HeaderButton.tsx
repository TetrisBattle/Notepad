import { NavLink } from 'react-router-dom'
import { Button } from '@thng/react'

export const HeaderButton = ({
	path,
	label,
}: {
	path: string
	label: string
}) => {
	return (
		<Button
			component={NavLink}
			to={path}
			variant='text'
			sx={(theme) => ({
				'&:hover': { bgcolor: 'transparent' },
				fontSize: '1.25rem',
				color: 'inherit',
				fontWeight: (theme) => theme.typography.fontWeightRegular,
				'&.active': theme.palette.mode === 'dark' && {
					color: theme.palette.primary.main,
				},
			})}
		>
			{label}
		</Button>
	)
}
