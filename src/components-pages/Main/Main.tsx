import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import RemConverter from "./RemConverter"
import Logo from "../../images/Logo.png"
import MenuIcon from "../../images/Menu.png"

export default function Main() {
	const activePage = useRef<string | undefined>()
	const [content, setContent] = useState(<RemConverter />)
	
	const colorSecondary = getComputedStyle(document.documentElement)
		.getPropertyValue('--colorSecondary')
		
	const navButtonNames = useRef([
		"RemConverter",
		"Empty"
	])
	
	const navBar = (
		<nav>
			<ul>
				{navButtonNames.current.map((navButtonName) => {
					return (
						<li key={navButtonName}>
							<button
								className={navButtonName + "Nav"}
								onClick={(e) => handleClick(e.currentTarget)}
							>
								{navButtonName}
							</button>
						</li>
					)
				})}
			</ul>
		</nav>
	)

	function handleClick(page: HTMLButtonElement) {
		if (page.innerHTML === activePage.current) return
		
		const prevPage: HTMLButtonElement | null = 
			document.querySelector("." + activePage.current + "Nav")
			
		if (prevPage) prevPage.style.color = "#FAFAFA"
		else console.error("prevPage was not found")
		
		page.style.color = colorSecondary
		activePage.current = page.innerHTML
				
		if (page.innerHTML === "RemConverter") {
			setContent(<RemConverter />)
			return
		}
		
		setContent(<div>{page.innerHTML}</div>)
	}
	
	useEffect(() => {
		const defaultPage: HTMLElement | null = 
			document.querySelector("." + navButtonNames.current[0] + "Nav")
		activePage.current = defaultPage?.innerHTML
		
		if (defaultPage) defaultPage.style.color = colorSecondary
	}, [navButtonNames, colorSecondary])

	return (
		<div className="Main">
			<header>
				<Link to="/">
					<img className="logo" src={Logo} alt="Logo" />
				</Link>
				{navBar}
				<img className="menuIcon" src={MenuIcon} alt="Menu" />
			</header>
			<main>
				{content}
			</main>
		</div>
	)
}
