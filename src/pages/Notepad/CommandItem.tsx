import { useState } from 'react'
import { Accordion, AccordionDetails, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface CommandInfo {
	command: string
	description: string
	details?: string
}

const CommandItem = ({ command, description, details }: CommandInfo) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<Accordion
			expanded={expanded}
			sx={{
				border: 'solid 1px #444',
				borderRadius: '4px !important',
				'&:before': { display: 'none' },
				'&.Mui-expanded': { margin: 0 },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					gap: 2,
					'.MuiTypography-root': { py: 1 },
				}}
			>
				<Typography sx={{ width: '40%', ml: 2, flexShrink: 0 }}>
					{command}
				</Typography>
				<Typography sx={{ flexGrow: 1 }}>{description}</Typography>
				<Box
					onClick={() => setExpanded((prev) => !prev)}
					sx={{
						width: 48,
						height: 48,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						cursor: 'pointer',
						visibility: details ? 'visible' : 'hidden',
					}}
				>
					<ExpandMoreIcon
						sx={{
							transition: 'all 0.2s',
							transform: expanded ? 'rotate(180deg)' : 'initial',
						}}
					/>
				</Box>
			</Box>
			<AccordionDetails
				sx={{
					px: 2,
					py: 1,
					bgcolor: (theme) => theme.palette.background.default,
					borderBottomLeftRadius: '4px',
					borderBottomRightRadius: '4px',
				}}
			>
				<Typography>{details}</Typography>
			</AccordionDetails>
		</Accordion>
	)
}

export default CommandItem
