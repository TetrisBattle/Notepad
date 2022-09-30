import { Box, Typography } from '@mui/material'

const NotFound = () => {
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
			<Typography variant='h1' color='primary' fontWeight='bold'>
				Error 404
			</Typography>
			<Typography color='primary' fontSize={20}>
				The page was not found!
			</Typography>
		</Box>
	)
}

export default NotFound
