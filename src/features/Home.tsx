import { Box, Button } from '@thng/react'
import { RouteOption } from 'Routes'
import { observer } from 'mobx-react-lite'
import { NavLink } from 'react-router-dom'

export const Home = observer(() => {
	const boxSize = { width: 100, height: 100 }

	return (
		<Box id='Home' sx={{ p: 3, ' .MuiButton-root': boxSize }}>
			<Button component={NavLink} to={RouteOption.DnD}>
				DnD
			</Button>
		</Box>
	)
})
