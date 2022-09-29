import { observer } from 'mobx-react-lite'
import { Box, Button, Toolbar } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import Git from './Git'
import Terminal from './Terminal'
import Regex from './Regex'
import NotFound from './NotFound'

const Notepad = () => {
	const { notepadStore } = useStoreContext()

	const getPageContent = () => {
		switch (notepadStore.selectedPage) {
			case 'Git':
				return <Git />
			case 'Terminal':
				return <Terminal />
			case 'Regex':
				return <Regex />
			default:
				return <NotFound />
		}
	}

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
						key={page}
						variant='text'
						color={notepadStore.selectedPage === page ? 'primary' : 'inherit'}
						onClick={() => (notepadStore.selectedPage = page)}
						sx={{ fontSize: 20 }}
					>
						{page}
					</Button>
				))}
			</Toolbar>
			{getPageContent()}
		</Box>
	)
}

export default observer(Notepad)
