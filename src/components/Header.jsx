import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'
import MenuIcon from '../images/Menu.png'
import Navbar from './Navbar'

export default function Header({ pages, selectedPage, setSelectedPage }) {
	
	return (
		<header>
			<Link to='/'><img className='logo' src={Logo} alt='Logo' /></Link>
			<Navbar
				pages={pages}
				selectedPage={selectedPage} 
				setSelectedPage={setSelectedPage} 
			/>
			<img className='menuIcon' src={MenuIcon} alt='Menu' />
		</header>
	)
}
