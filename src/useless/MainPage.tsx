import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import RemConverter from '../components-pages/RemConverter'
import Logo from '../../images/Logo.png'
import MenuIcon from '../../images/Menu.png'

export default function Main() {
	const activePage = useRef<HTMLButtonElement>()
	const [content, setContent] = useState(<RemConverter />)

	const colorSelectedButton = getComputedStyle(
		document.documentElement
	).getPropertyValue('--colorSecondary')

	const colorText = getComputedStyle(
		document.documentElement
	).getPropertyValue('--colorText')

	const navButtonNames = useRef([
		'RemConverter',
		'Empty'
	])

	useEffect(() => {
		if (!activePage.current)
			activePage.current = document.querySelector('button') as HTMLButtonElement
	}, [])

	const handleClick = (button: HTMLButtonElement) => {
		if (button === activePage.current) return

		if (activePage.current) activePage.current.style.color = colorText
		button.style.color = colorSelectedButton
		activePage.current = button

		if (button.innerHTML === 'RemConverter') {
			setContent(<RemConverter />)
			return
		}

		setContent(<div>{button.innerHTML}</div>)
	}

	const navBar = (
		<nav>
			<ul>
				{navButtonNames.current.map((navButtonName) => {
					return (
						<li key={navButtonName}>
							<button onClick={(e) => handleClick(e.currentTarget)}>
								{navButtonName}
							</button>
						</li>
					)
				})}
			</ul>
		</nav>
	)

	return (
		<div className='Main'>
			<header>
				<Link to='/'>
					<img className='logo' src={Logo} alt='Logo' />
				</Link>
				{navBar}
				<img className='menuIcon' src={MenuIcon} alt='Menu' />
			</header>
			<main>{content}</main>
		</div>
	)
}

// SCSS for header
// header {
// 	block-size: 4rem;
// 	border-block-end: solid .063rem $gray;
	
// 	img {
// 		max-inline-size: 4rem;
// 		max-block-size: 100%;
// 		padding: 1rem;
// 		padding-inline: 1rem;
// 		float: left;
// 		background-color: $colorHeader;
// 		&:hover { filter: brightness(1.2); }
// 	}
	
// 	nav { display: none; }
// 	.menuIcon { float: right; }
	
// 	@media (min-Width: $xs) {
// 		nav {
// 			display: block;
// 			block-size: 100%;
		
// 			ul {
// 				display: flex;
// 				block-size: 100%;
			
// 				li {
// 					&:first-child button { color: $colorSecondary; }
					
// 					button {
// 						block-size: 100%;
// 						font-size: 1.5rem;
// 						background-color: $colorHeader;
// 						border-radius: 0;
// 						box-shadow: none;
// 						color: $colorText;
// 						&:hover { filter: brightness(1.2); }
// 					}
// 				}
// 			}
// 		}
	
// 		.menuIcon { display: none; }
// 	}
// }
