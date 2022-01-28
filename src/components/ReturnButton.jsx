import { Link } from 'react-router-dom'
import { ReactComponent as LeftArrow } from '../images/LeftArrow.svg'

export default function ReturnButton() {
	return (
		<Link className='returnButton' to='/'>
			<LeftArrow />
		</Link>
	)
}
