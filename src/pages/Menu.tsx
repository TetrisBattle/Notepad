import { Link } from 'react-router-dom'

export default function Menu() {
	return (
		<div className='Menu'>
			<h1>TetrisBattle</h1>

			<div className='container'>
				<Link to='/Notepad'>Notepad</Link>
				<Link to='/RemConverter'>RemConverter</Link>
				<Link to='/Sandbox'>Sandbox</Link>
			</div>
		</div>
	)
}
