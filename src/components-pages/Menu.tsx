import { Link } from "react-router-dom"

export default function Menu() {
	return (
		<div className="Menu">
			<h1>xTrouble</h1>
			<div className="container">
				<Link to="/main">
					<button>Main</button>
				</Link>
				<Link to="/sandbox">
					<button>Sandbox</button>
				</Link>
			</div>
		</div>
	)
}
