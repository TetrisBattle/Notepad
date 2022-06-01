import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from 'icons/Logo.svg'
import { MenuItem } from '@mui/material'
import Navbar from 'components/Navbar'
import MuiMenu from 'components/MuiMenu'

export default function Header({ pages, selectedPage, setSelectedPage }) {
	return (
		<header className='mainHeader'>
			<Link className='iconButton' to='/'><Logo /></Link>
			<Navbar
				pages={pages}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<MuiMenu>
				{pages.map((page) => (
					<MenuItem
						key={page}
						onClick={() => setSelectedPage(page)}
					>{page}</MenuItem>
				))}
			</MuiMenu>
		</header>
	)
}
