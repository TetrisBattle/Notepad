import { useState } from 'react'
import Navbar from '../../components/Navbar'
import { git } from '../../data/notepad.json'

export default function Git() {
	const pages = [
		'All',
		'Init',
		'Branch',
		'Commit',
	]
	
	const [selectedPage, setSelectedPage] = useState(pages[0])
	
	const getCommands = () => {
		return git.map(({ command, description }) => {
			return (
				<div key={command} className='note'>
					<p className='command'>{command}</p>
					<p className='description'>{description}</p>
				</div>
			)
		})
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
