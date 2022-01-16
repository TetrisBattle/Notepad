import { Link } from 'react-router-dom'
import LeftArrow from '../images/LeftArrow.png'

export default function ReturnButton() {
	return (
		<Link to='/'>
			<img className='returnButton' src={LeftArrow} alt='Return' />
		</Link>
	)
}
