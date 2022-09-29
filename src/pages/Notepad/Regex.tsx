import { Box, Paper, Typography } from '@mui/material'
import CommandItem from './CommandItem'
import { commands as commandsArray } from './data/regex'

const Regex = () => {
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
				Regex
			</Typography>

			<Paper sx={{ width: 'fit-content', p: 2, mx: 'auto' }}>
				<Typography>
					Regular expression (Regex) is a way to match a certain area of a
					string.
				</Typography>
				<Typography>It starts and ends with "/" sign.</Typography>
				<Typography>/asd/ = match the first "asd" from string</Typography>
				<Typography>
					/asd/g = match all the "asd" from string, letter g makes it match
					globally
				</Typography>
			</Paper>

			<Typography
				variant='h2'
				sx={{
					color: (theme) => theme.palette.primary.main,
					mt: 2,
					mb: 3,
					textAlign: 'center',
				}}
			>
				Examples
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
				<CommandItem
					command='"music.mp4".replace(/\.mp4/g, "")'
					description='replace ".mp4" with ""'
				/>
				<CommandItem
					command='/asd/g.test(myString)'
					description='boolean: string === "asd"'
				/>
			</Box>

			<Typography
				variant='h2'
				sx={{
					color: (theme) => theme.palette.primary.main,
					mt: 2,
					mb: 3,
					textAlign: 'center',
				}}
			>
				Regular expression formats
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
				{commandsArray.map((commands, index) => {
					return (
						<Box key={`regex-${index}`} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
							{commands.map((regexCommand) => {
								return (
									<CommandItem key={regexCommand.command} {...regexCommand} />
								)
							})}
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}

export default Regex
