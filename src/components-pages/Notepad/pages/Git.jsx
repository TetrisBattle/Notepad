import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import { git } from '../../../data/notepad.json'

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
	
	const getCommands = () => {
		const getCommands = (commands) => {
			return commands?.map(({ command, description }) => {
				return (
					<div key={command} className='note'>
						<p className='command'>{command}</p>
						<p className='description'>{description}</p>
					</div>
				)
			})
		}
		
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
