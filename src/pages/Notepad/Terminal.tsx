import { Box, Typography } from '@mui/material'
import CommandItem from './CommandItem'
import { commands } from './data/terminal'

export default function Terminal() {
	return (
		<Box
			sx={{
				p: 2,
				maxWidth: (theme) => theme.breakpoints.values.md,
				mx: 'auto',
			}}
		>
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
						<CommandItem
							key={terminalCommand.command}
							{...terminalCommand}
						/>
					)
				})}
			</Box>
		</Box>
	)
}
