import { useState } from 'react'
import Navbar from '../../components/Navbar'
import { git } from '../../data/notepad.json'

export default function Git() {
	const pages = [
		'Init',
		'Branch',
		'Commit',
		'Extra'
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
		
		switch (selectedPage) {
			case 'All':
				return getCommands(git.init)
			case 'Init':
				return getCommands(git.init)
			case 'Extra':
				return getCommands(git.extra)
			default:
				return null
		}
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
