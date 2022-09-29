import { observer } from 'mobx-react-lite'
import { Box, Button, Toolbar } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import {
	Routes,
	Route,
	Link,
	useLocation,
} from 'react-router-dom'

const Notepad = () => {
	const { notepadStore } = useStoreContext()
	const location = useLocation()

	return (
		<Box>
			<Toolbar
				sx={{
					borderBottom: 'solid 1px grey',
					justifyContent: 'center',
				}}
			>
				{notepadStore.pages.map((page) => (
					<Button
						key={page.id}
						variant='text'
						color={page.path === location.pathname ? 'primary' : 'inherit'}
						component={Link}
						to={page.path}
						sx={{ fontSize: 20 }}
					>
						{page.id}
					</Button>
				))}
			</Toolbar>
			<Routes>
				{notepadStore.pages.map((page) => (
					<Route key={page.path} path={page.id} element={page.element} />
				))}
			</Routes>
		</Box>
	)
}

export default observer(Notepad)
