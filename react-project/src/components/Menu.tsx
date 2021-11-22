import React from "react"
import { Link } from "react-router-dom"

export default function Header() {
	return (
		<div className="Header">
			<header>
				<nav>
					<ul>
						<li><button>One</button></li>
						<li><button>Two</button></li>
						<li><Link to="/sandbox"><button>Sandbox</button></Link></li>
					</ul>
				</nav>
			</header>

			<br />

			<button>Sandbox</button>
		</div>
	)
}
