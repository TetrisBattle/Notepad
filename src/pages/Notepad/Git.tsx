import { Box, Button, Toolbar, Typography } from '@mui/material'
import { useStoreContext } from 'contexts/StoreContext'
import { commands } from './data/git'
import CommandItem from './CommandItem'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const Git = () => {
	const { notepadStore } = useStoreContext()
	const selectedGitPageCommands = commands[notepadStore.selectedGitPage]

	useEffect(() => {}, [notepadStore.selectedGitPage])

	return (
		<>
			<Toolbar
				sx={{
					borderBottom: 'solid 1px grey',
					justifyContent: 'center',
					flexWrap: 'wrap',
				}}
			>
				{notepadStore.gitPages.map((page) => (
					<Button
						key={page}
						variant='text'
						color={
							notepadStore.selectedGitPage === page ? 'primary' : 'inherit'
						}
						onClick={() => (notepadStore.selectedGitPage = page)}
						sx={{ fontSize: 20 }}
					>
						{page}
					</Button>
				))}
			</Toolbar>
			<Box
				sx={{
					p: 2,
					display: 'flex',
					flexDirection: 'column',
					maxWidth: (theme) => theme.breakpoints.values.md,
					mx: 'auto'
				}}
			>
				<Typography
					variant='h1'
					color='primary'
					fontWeight={600}
					textAlign='center'
					mb={2}
				>
					Git Commands
				</Typography>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
					{selectedGitPageCommands.map((gitCommand) => {
						return <CommandItem key={gitCommand.command} {...gitCommand} />
					})}
				</Box>
			</Box>
		</>
	)
}

export default observer(Git)
