import { Box, Typography } from '@thng/react'

export const NotFound = () => {
	return (
		<Box
			id='NotFound'
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 3,
				mt: 3,
			}}
		>
			<Typography variant='h1'>Not Found!</Typography>
		</Box>
	)
}
