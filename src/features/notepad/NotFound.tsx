import { Box, Typography } from '@mui/material'

export const NotFound = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				mt: 2,
				gap: 2,
			}}
		>
			<Typography variant='h1' color='primary' fontWeight='medium'>
				Error 404
			</Typography>
			<Typography fontSize={20}>Git was not found!</Typography>
		</Box>
	)
}
