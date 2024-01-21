import { Box, Button, Toolbar, Typography } from '@mui/material'
import { commands } from './data/git'
import { CommandItem } from './CommandItem'
import { observer } from 'mobx-react-lite'
import { NavLink, useParams } from 'react-router-dom'
import { NotFound } from './NotFound'

export const Git = observer(() => {
	const commandKeys = Object.keys(commands)
	const params = useParams()
	if (!params.id) throw new Error('Missing id param')
	const gitPageExists = commandKeys.some((key) => key === params.id)
	const selectedGitCommands = gitPageExists ? commands[params.id] : null

	return (
		<>
			<Toolbar
				sx={{
					borderBottom: 'solid 1px grey',
					justifyContent: 'center',
					flexWrap: 'wrap',
				}}
			>
				{commandKeys.map((key) => (
					<Button
						key={key}
						component={NavLink}
						to={`/notepad/git/${key}`}
						variant='text'
						sx={(theme) => ({
							fontSize: 20,
							color: 'inherit',
							'&.active': {
								color: theme.palette.primary.main,
							},
						})}
					>
						{key.slice(0, 1).toUpperCase() + key.slice(1)}
					</Button>
				))}
			</Toolbar>
			{selectedGitCommands ? (
				<Box
					sx={{
						p: 2,
						display: 'flex',
						flexDirection: 'column',
						maxWidth: (theme) => theme.breakpoints.values.md,
						mx: 'auto',
					}}
				>
					<Typography
						variant='h1'
						color='primary'
						fontWeight={400}
						textAlign='center'
						mb={2}
					>
						Git Commands
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 1,
						}}
					>
						{selectedGitCommands.map((gitCommand) => {
							return (
								<CommandItem
									key={gitCommand.command}
									{...gitCommand}
								/>
							)
						})}
					</Box>
				</Box>
			) : (
				<NotFound />
			)}
		</>
	)
})
