import { Box, Button } from '@thng/react'
import { Link } from 'react-router-dom'

export const Forms = () => {
	return (
		<Box
			sx={{
				p: 3,
				display: 'flex',
				justifyContent: 'center',
				gap: 2,
			}}
		>
			<Button component={Link} to={'/formikForm'}>
				Formik Form
			</Button>
			<Button component={Link} to={'/reactHookForm'}>
				React Hook Form
			</Button>
		</Box>
	)
}
