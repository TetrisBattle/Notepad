import { useState } from 'react'
import Navbar from 'components/Navbar'
import { git } from '../data/git.json'
import ExpandBars from 'components/ExpandBar'

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

export default function Git() {
	const [selectedPage, setSelectedPage] = useState(pages[0])
	const currentPageCommands = git[selectedPage.toLowerCase()]

	return (
		<div className="git">
			<Navbar
				pages={pages}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<main>
				<h1>Git commands</h1>
				<section>
					<ExpandBars commands={currentPageCommands} />
				</section>
			</main>
		</div>
	)
}
