import { useState } from 'react'
import Header from '../../components/Header'
import NotFound from './pages/NotFound'
import Git from './pages/Git'

export default function Notepad() {
	const pages = [
		'Git',
		'Terminal',
		'Regex',
		'VS Code',
	]
	
	const [selectedPage, setSelectedPage] = useState(pages[0])
	
	const getContent = () => {
		switch (selectedPage) {
			case 'Git':
				return <Git />
			default:
				return <NotFound />
		}
	}
	
	return (
		<div className='Notepad'>
			<Header
				pages={pages}
				selectedPage={selectedPage} 
				setSelectedPage={setSelectedPage} 
			/>
			{getContent()}
		</div>
	)
}
