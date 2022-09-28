import { Box, Typography } from '@mui/material'
import CommandItem from './CommandItem'
import { commands } from './data/terminal'

const Terminal = () => {
	return (
		<Box p={2}>
			<Typography
				variant='h1'
				color='primary'
				fontWeight={600}
				textAlign='center'
				mb={2}
			>
				Terminal Commands
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
				{commands.map((terminalCommand) => {
					return (
						<CommandItem key={terminalCommand.command} {...terminalCommand} />
					)
				})}
			</Box>
		</Box>
	)
}

export default Terminal
