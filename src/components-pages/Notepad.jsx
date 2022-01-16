import { useState } from 'react'
import Header from '../components/Header'
import Git from './Notepad/Git'

export default function Notepad() {
	const pages = [
		'Git',
		'Terminal',
	]
	
	const [selectedPage, setSelectedPage] = useState(pages[0])
	
	const getContent = () => {
		switch (selectedPage) {
			case 'Git':
				return <Git />
			default:
				return <h1 className='notFound'>Error 404</h1>
		}
	}
	
	return (
		<>
			<Header
				pages={pages}
				selectedPage={selectedPage} 
				setSelectedPage={setSelectedPage} 
			/>
			<div className='Notepad'>
				{getContent()}
			</div>
		</>
	)
}
