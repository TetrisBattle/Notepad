import { Box, Button } from '@thng/react'
import { RouteOption } from 'routes'
import { Link } from 'react-router-dom'

export const Playground = () => {
	return (
		<Box
			sx={{
				p: 3,
				display: 'flex',
				justifyContent: 'center',
				gap: 2,
			}}
		>
			<Button component={Link} to={RouteOption.Forms}>
				Forms
			</Button>
			<Button component={Link} to={RouteOption.DnD}>
				DnD
			</Button>
		</Box>
	)
}
