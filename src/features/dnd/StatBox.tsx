import { Box } from '@mui/material'
import { Input, Typography, isInt } from '@thng/react'
import { StatSvg } from './StatSvg'
import { StatName, StatSetter } from './DndStore'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'

type StatBoxProps = {
	statName: StatName
}

export const StatBox = observer(({ statName }: StatBoxProps) => {
	const { dndStore } = useStore()
	const svgOffset = 2
	const statSetter = ('set' +
		statName.charAt(0).toUpperCase() +
		statName.slice(1)) as StatSetter

	const getStatProf = () => {
		const stat = Number(dndStore[statName])
		if (!dndStore[statName] || isNaN(stat)) return ''

		const statGround = (stat - 10) / 2
		const prof =
			statGround > 0 ? Math.floor(statGround) : Math.round(statGround)
		return prof.toString()
	}

	return (
		<Box sx={{ position: 'relative', width: 'fit-content' }}>
			<StatSvg />

			<Typography
				sx={{
					position: 'absolute',
					top: 10,
					left: svgOffset,
					textAlign: 'center',
					width: 1,
				}}
			>
				{statName.charAt(0).toUpperCase() + statName.slice(1)}
			</Typography>

			<Input
				value={dndStore[statName]}
				onChange={(e) => {
					if (isInt(e.target.value) && e.target.value.length <= 2) {
						dndStore[statSetter](e.target.value)
					}
				}}
				disableUnderline
				inputProps={{
					sx: {
						height: 90,
						p: 0,
						textAlign: 'center',
						fontSize: 40,
					},
				}}
				sx={{
					position: 'absolute',
					top: 12,
					left: svgOffset,
					height: 90,
					m: (theme) => theme.spacing(0, 2),
					pt: 2,
					textAlign: 'center',
				}}
			/>

			<Typography
				sx={{
					position: 'absolute',
					bottom: 18,
					left: svgOffset,
					textAlign: 'center',
					width: 1,
					fontSize: 24,
				}}
			>
				{getStatProf()}
			</Typography>
		</Box>
	)
})
