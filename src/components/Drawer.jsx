import React, { useState } from 'react'
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { ReactComponent as Logo } from 'icons/Logo.svg'
import Navbar from 'components/Navbar'

const pages = [
	'Init',
	'Remote',
	'Branch',
	'Commit',
	'Changes',
	'Stash',
	'Reset',
	'Info'
]

function Drawer({
	selectedPage,
	setSelectedPage
}) {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<Logo className='iconButton' onClick={() => setOpen(true)} />
			<SwipeableDrawer
				anchor={"left"}
				open={open}
				onClose={() => setOpen(false)}
				onOpen={() => setOpen(true)}
			>
				<Navbar
					pages={pages}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
			</SwipeableDrawer>
		</div>
	)
}

export default Drawer
