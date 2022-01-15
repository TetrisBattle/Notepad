import { useState } from 'react'
import Header from '../components/Header'

export default function Notepad() {
	const [content, setContent] = useState('Git')
	
	const getContent = () => {
		if (content === 'Git') {
			return 'git'
		} else return 'Error 404'
	}
	
	return (
		<>
			<Header setContent={setContent} />
			<div>
				{getContent()}
			</div>
		</>
	)
}
