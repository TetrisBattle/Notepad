import { Box, Typography } from '@thng/react'
import { Stats } from './Stats'

export const Dnd = () => {
	return (
		<Box
			id='DnD'
			sx={{
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				alignItems: 'center',
			}}
		>
			<Typography variant='h1'>DnD</Typography>
			<Stats />
		</Box>
	)
}
