import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from '../components-pages/Menu'

test('Buttons are rendered (jest)', () => {
	render(<Router><Menu /></Router>)
	expect(screen.getByRole('link', { name: /Notepad/i })).toBeInTheDocument()
	expect(screen.getByRole('link', { name: /Sandbox/i })).toBeInTheDocument()
})

test('Buttons are rendered (enzyme)', () => {
	const wrapper = shallow(<Menu />)
	expect(wrapper.find('Link').length).toBeGreaterThan(1)
	expect(wrapper.find('.Menu').debug()).toContain('<Link to="/notepad">')
	expect(wrapper.find('.Menu').debug()).toContain('<Link to="/sandbox">')
	
	const firstButton = wrapper.find('Link').at(0)
	expect(firstButton.text()).toContain('Notepad')
})
