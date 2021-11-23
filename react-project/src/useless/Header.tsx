interface IProps {
	setContent: React.Dispatch<React.SetStateAction<JSX.Element>>
}

const Header: React.FC<IProps> = ({ setContent }) => {
	
	const handleClick = (page: String) => {
		setContent(<>{page}</>)
	}
	
	return (
		<div className="Header">
			<header>
				<nav>
					<ul>
						<li><button onClick={() => handleClick("one")}>One</button></li>
						<li><button onClick={() => handleClick("two")}>Two</button></li>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default Header