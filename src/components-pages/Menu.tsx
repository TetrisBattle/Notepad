import { useState, useRef, useEffect } from "react"
import RemConverter from "../components-menu-content/RemConverter"
import Logo from "../images/Logo.svg"
import MenuIcon from "../images/Menu.svg"

export default function Menu() {
	const activePage = useRef<string | undefined>()
	const [content, setContent] = useState(<RemConverter />)
	
	const colorPrimary = getComputedStyle(document.documentElement)
		.getPropertyValue('--colorPrimary')
		
	const navButtonNames = [
		"RemConverter",
		"Empty"
	]
	
	const navBar = (
		<nav>
			<ul>
				{navButtonNames.map((navButtonName) => {
					return (
						<li key={navButtonName}>
							<button
								id={navButtonName}
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
	
	useEffect(() => {
		const defaultPage: HTMLElement | null = 
			document.querySelector("#RemConverter")
			activePage.current = defaultPage?.innerHTML
		
		if (defaultPage) {
			defaultPage.style.color = colorPrimary
		} else {
			console.error("defaultPage was not found")
		}
	}, [colorPrimary])

	function handleClick(page: HTMLButtonElement) {
		if (page.innerHTML === activePage.current) return
		
		const prevPage: HTMLButtonElement | null = 
			document.querySelector("#" + activePage.current)
			
		if (prevPage) prevPage.style.color = "#FAFAFA"
		else console.error("prevPage was not found")
		
		page.style.color = colorPrimary
		activePage.current = page.innerHTML
				
		if (page.innerHTML === "RemConverter") {
			setContent(<RemConverter />)
			return
		}
		
		setContent(<div>{page.innerHTML}</div>)
	}

	return (
		<div className="Menu">
			<header>
				<img className="logo" src={Logo} alt="Logo" />
				{navBar}
				<img className="menuIcon" src={MenuIcon} alt="Menu" />
			</header>
			<main>
				{content}
			</main>
		</div>
	)
}
