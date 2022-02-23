import ReactDOM from 'react-dom'
import App from '../pages/App'

test('App should render without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<App />, div)
})
