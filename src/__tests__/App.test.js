import ReactDOM from 'react-dom'
import Menu from 'pages/Menu'

test('Menu should render without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<Menu />, div)
})
