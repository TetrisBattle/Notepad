import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import RemConverter from "../components-index-content/RemConverter"
import Logo from "../images/logo.png"

export default function Content() {
	const activePage = useRef<string | undefined>()
	const [content, setContent] = useState(<RemConverter />)
	
	const colorSecondary = getComputedStyle(document.documentElement)
		.getPropertyValue('--colorSecondary');
		
	const navButtonNames = [
		"RemConverter",
		"Two"
	]
	
	const navButtons = navButtonNames.map((navButtonName) => {
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
	})
	
	useEffect(() => {
		const defaultPage: HTMLElement | null = 
			document.querySelector("#RemConverter")
			activePage.current = defaultPage?.innerHTML
		
		if (defaultPage) {
			defaultPage.style.color = colorSecondary
		} else {
			console.error("defaultPage was not found")
		}
	}, [colorSecondary])

	function handleClick(page: HTMLButtonElement) {
		if (page.innerHTML === activePage.current) return
		
		const prevPage: HTMLButtonElement | null = 
			document.querySelector("#" + activePage.current)
			
		if (prevPage) prevPage.style.color = "#eee"
		else console.error("prevPage was not found")
		
		page.style.color = colorSecondary
		activePage.current = page.innerHTML
				
		if (page.innerHTML === "RemConverter") {
			setContent(<RemConverter />)
			return
		}
		
		setContent(<div>{page.innerHTML}</div>)
	}

	return (
		<div id="MenuPage">
			<header>
				<img src={Logo} alt="Logo" />
				<nav>
					<ul>
						{navButtons}
						<li>
							<Link to="/sandbox">
								<button>Sandbox</button>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
			
			{content}
		</div>
	)
}
