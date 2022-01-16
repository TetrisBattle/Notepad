

export default function Navbar({ 
	pages,
	selectedPage,
	setSelectedPage,
	variant
}) {
	
	const getPages = () => {
		return pages.map((page) => {
			return (
				<button 
					key={page}
					className={page === selectedPage ? 'selected' : null}
					onClick={() => setSelectedPage(page)}
				>
					{page}
				</button>
			)
		})
	}
	
	return (
		// <nav className={variant ? '.navbar ' + variant : '.navbar'}>
		<nav className='navbar'>
			{getPages()}
		</nav>
	)
}
