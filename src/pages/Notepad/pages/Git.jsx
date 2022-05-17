import { useState } from 'react'
import {
	Accordion,
	AccordionSummary,
	AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Navbar from 'components/Navbar'
import { git } from '../data/git.json'

export default function Git() {
	const pages = [
		'Init',
		'Remote',
		'Branch',
		'Commit',
		'Changes',
		'Stash',
		'Reset',
		'Info'
	]

	const [selectedPage, setSelectedPage] = useState(pages[0])
	const [expanded, setExpanded] = useState(false);

	const getCommands = () => {
		const getCommands = (commands) => (
			commands?.map(({ command, description, details }) => (
					<Accordion
						key={command}
						expanded={expanded === details}
						onChange={() => {
							if (details) setExpanded(expanded === details ? false : details)
						}}
						disableGutters
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							sx={{
								'svg': { visibility: details ? 'visible': 'hidden' },
								':hover': { cursor: details ? 'pointer': 'default !important' }
							}}
						>
							<p>{command}</p>
							<p>{description}</p>
						</AccordionSummary>
						<AccordionDetails>
							<p>{details}</p>
						</AccordionDetails>
					</Accordion>
				)
			)
		)

		return getCommands(git[selectedPage.toLowerCase()])
	}

	return (
		<div className="git">
			<Navbar
				pages={pages}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<main>
				<h1>Git commands</h1>
				<section>{getCommands()}</section>
			</main>
		</div>
	)
}
