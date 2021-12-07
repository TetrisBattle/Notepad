import { shallow } from 'enzyme'
import Main from '../components-pages/Main/Main'

let wrapper
let clickFirstButton
let clickSecondButton
beforeEach(() => {
	wrapper = shallow(<Main />)
	
	clickFirstButton = () => {
		const firstButton = wrapper.find('button').at(0)
		firstButton.props().onClick({ 
			currentTarget: { 
				innerHTML: firstButton.text(),
				style: { color: '#fff' }
			} 
		})
	}
	
	clickSecondButton = () => {
		const secondButton = wrapper.find('button').at(1)
		secondButton.props().onClick({ 
			currentTarget: { 
				innerHTML: secondButton.text(),
				style: { color: '#fff' }
			} 
		})
	}
})

test('set active button color on init', () => {
	const firstButton = wrapper.find('button').get(0)
	
	console.log(firstButton)
	
	// console.log(wrapper.debug())
})

test('nothing happens when active button is pressed', () => {
	let currentContent = wrapper.find('main').text()
	clickFirstButton()
	expect(wrapper.find('main').text()).toBe(currentContent)
	
	clickSecondButton()
	currentContent = wrapper.find('main').text()
	clickSecondButton()
	expect(wrapper.find('main').text()).toBe(currentContent)
})

test('switch content', () => {
	let currentContent = wrapper.find('main').text()
	clickSecondButton()
	expect(wrapper.find('main').text()).not.toBe(currentContent)
	
	currentContent = wrapper.find('main').text()
	clickFirstButton()
	expect(wrapper.find('main').text()).not.toBe(currentContent)
})

