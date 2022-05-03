import React from 'react'
import {
	Box,
	Dialog,
	DialogContent,
	DialogActions,
	Paper,
	Typography,
	IconButton,
} from '@mui/material'
import Draggable from 'react-draggable'
import MuiButton from '../../components-MUI/MyButton.jsx'
import CloseIcon from '@mui/icons-material/Close'

// enable dragable dialog
const PaperComponent = (props) => {
	return (
		<Draggable handle='.dialogHeader'>
			<Paper {...props} />
		</Draggable>
	)
}

export default class MuiDialog extends React.Component {
	constructor(props) {
    super(props);
		
		this.state = {
			dialogState: false,
			windowWidth: window.innerWidth,
			paperComponent: null
		}
  }
	
	componentDidMount() {
		console.log('mount')
	}
	
	componentDidUpdate() {
		if (this.state.dialogState === true) window.addEventListener('resize', this.handleResize)
		else window.removeEventListener('resize', this.handleResize)
	}
	
	componentWillUnmount() {
		console.log('unmount')
	}
	
	openDialog() {
		this.setState({ dialogState: true })
	}
	
	handleResize = () => this.setState({ windowWidth: window.innerWidth })

	usePaperComponent() {
		if (this.state.windowWidth <= 900) return null
		return PaperComponent
	}

	render() {
		const {
			id,
			headerTitle,
			content,
			actionsOkButtonOnClick,
		} = this.props;
		
		const { dialogState } = this.state;
		actionsOkButtonOnClick = actionsOkButtonOnClick 
			??  function() { setDialogState(false) }
		
		return (
			<Dialog
				id={id}
				open={dialogState}
				onClose={() => this.setState({ dialogState: false })}
				PaperComponent={this.usePaperComponent()}
			>
				<Box className='dialogHeader'>
					<Typography variant='h1'>{headerTitle}</Typography>
					<IconButton onClick={() => this.setState({ dialogState: false })}>
						<CloseIcon color='white' />
					</IconButton>
				</Box>

				<DialogContent>{content}</DialogContent>

				<DialogActions>
					<MuiButton
						text='Peruuta'
						color='gray'
						variant='outlined'
						onClick={() => this.setState({ dialogState: false })}
					/>
					<MuiButton
						text='OK'
						onClick={actionsOkButtonOnClick()}
					/>
				</DialogActions>
			</Dialog>
		)
	}
}
