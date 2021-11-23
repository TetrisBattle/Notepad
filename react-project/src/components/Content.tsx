import { useState } from 'react'
import Header from './Header'

export default function Content() {
	const [content, setContent] = useState<JSX.Element>(<div></div>)
	
	return (
		<>
			<Header setContent={setContent} />
			<section>
				{content}
			</section>
		</>
	)
}
