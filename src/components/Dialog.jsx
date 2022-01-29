import { ReactComponent as CloseIcon } from '../icons/Close.svg'

export default function Dialog({ 
	className,
	dialogState,
	setDialogState,
	onClose,
	title = 'Dialog',
	content,
	actions,
	cancelButton,
	actionButton,
	actionButtons
}) {
	const closeDialog = () => {
		setDialogState(false)
		onClose?.()
	}
	
	const classes = className ? `container ${className}` : 'container'
	
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
	
	cancelButton = cancelButton ?? <button onClick={closeDialog}>Cancel</button>
	
	actions = actions ?? <>
		{cancelButton}
		{actionButton}
		{actionButtons}
	</>
	
	return (
		<dialog open={dialogState}>
			<div className='background' onClick={closeDialog} />
			
			<div className={classes}>
				{header}
				<div className='content'>{content}</div>
				<div className='actions'>{actions}</div>
			</div>
		</dialog>
	)
}
