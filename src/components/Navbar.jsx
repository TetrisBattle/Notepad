export default function Navbar({
	pages,
	selectedPage,
	setSelectedPage
}) {
	return (
		<nav>
			{pages.map((page) => (
				<button
					key={page}
					className={page === selectedPage ? 'selected' : null}
					onClick={() => setSelectedPage(page)}
				>{page}</button>
			))}
		</nav>
	)
}
