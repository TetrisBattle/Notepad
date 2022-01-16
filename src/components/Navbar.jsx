export default function Navbar({ 
	pages,
	selectedPage,
	setSelectedPage
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
		<nav>{getPages()}</nav>
	)
}
