import { Link } from 'react-router-dom'

export default function Menu() {
	return (
		<div className='Menu'>
			<h1>xTrouble</h1>
			
			<div className='container'>
				<Link to='/notepad'>Notepad</Link>
				<Link to='/RemConverter'>RemConverter</Link>
				<Link to='/sandbox'>Sandbox</Link>
			</div>
		</div>
	)
}
