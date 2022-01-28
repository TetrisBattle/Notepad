import { useState } from 'react'
import { ReactComponent as CloseIcon } from '../images/Close.svg'

export default function Dialog({ 
	className,
	dialogState,
	setDialogState,
	onClose,
	title = 'Dialog',
	content,
	actions 
}) {
	const [open, setOpen] = useState(true)
	const classes = `container ${className}`
	
	const closeDialog = () => {
		if (setDialogState) setDialogState(false)
		else setOpen(false)
		onClose?.()
	}
	
	const header = (
		<header draggable='true'>
			<h1>{title}</h1>
			<div className='closeIconContainer'>
				<button className='iconButton' onClick={closeDialog}>
					<CloseIcon />
				</button>
			</div>
		</header>
	)
	
	actions = actions ?? <>
		<button onClick={closeDialog}>Cancel</button>
		<button>OK</button>
	</>
	
	return (
		<dialog open={dialogState ?? open}>
			<div className='background' onClick={closeDialog} />
			
			<div className={classes}>
				{header}
				<div className='content'>{content}</div>
				<div className='actions'>{actions}</div>
			</div>
		</dialog>
	)
}
