import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../icons/Logo.svg'
import { ReactComponent as MenuIcon } from '../icons/Menu.svg'
import Navbar from './Navbar'

export default function Header({ pages, selectedPage, setSelectedPage }) {
	return (
		<header className='mainHeader'>
			<Link className='iconButton' to='/'><Logo /></Link>
			<Navbar
				pages={pages}
				selectedPage={selectedPage} 
				setSelectedPage={setSelectedPage} 
			/>
			<button className="iconButton menuIcon">
				<MenuIcon />
			</button>
		</header>
	)
}
