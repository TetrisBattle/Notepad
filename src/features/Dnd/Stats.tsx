import { Box } from '@mui/material'
import { StatBox } from './StatBox'

export const Stats = () => {
	return (
		<Box
			sx={{
				width: 450,
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			<StatBox statName='strength' />
			<StatBox statName='constitution' />
			<StatBox statName='dexterity' />
			<StatBox statName='intelligence' />
			<StatBox statName='wisdom' />
			<StatBox statName='charisma' />
		</Box>
	)
}
