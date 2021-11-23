import { Link } from "react-router-dom"
// import {getNode} from "../usefull/ClassHandler"

interface props {
	setContent: React.Dispatch<React.SetStateAction<JSX.Element>>
}

// function Header({ setContent }: props) {
// function Header ({ setContent }) {
const Header: React.FC<props> = ({ setContent }) => {
	
	const handleClick: Function = (page: String) => {
		setContent(<>{page}</>)
	}
	
	return (
		<div className="Header">
			<header>
				<nav>
					<ul>
						<li><button onClick={() => handleClick("one")}>One</button></li>
						<li><button onClick={() => handleClick("two")}>Two</button></li>
						<li><Link to="/sandbox"><button>Sandbox</button></Link></li>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default Header