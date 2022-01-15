import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'
import MenuIcon from '../images/Menu.png'

export default function Header({ setContent }) {
	const pages = [
		'Git',
		'Terminal',
	]
	
	const [selected, setSelected] = useState(pages[0])
	
	const onPageClick = (page) => {
		setSelected(page)
		setContent(page)
	}
	
	const getPages = () => {
		return pages.map((page) => {
			return (
				<button 
					className={page === selected ? 'selected' : null}
					onClick={() => onPageClick(page)}
				>
					{page}
				</button>
			)
		})
	}
	
	return (
		<header>
			<Link to='/'><img className='logo' src={Logo} alt='Logo' /></Link>
			{getPages()}
			<img className='menuIcon' src={MenuIcon} alt='Menu' />
		</header>
	)
}
