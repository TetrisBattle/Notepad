import { shallow } from 'enzyme'
import RemConverter from '../components-pages/Main/RemConverter'

let wrapper
let px
let rem
beforeEach(() => {
	wrapper = shallow(<RemConverter />)
	px = wrapper.find('input#px')
	rem = wrapper.find('input#rem')
})

test('component has px and rem inputs', () => {
	expect(px.length).toBe(1)
	expect(rem.length).toBe(1)
})

describe('Convert px to rem', () => {
	test('10px is 0.625rem', () => {
		px.props().onChange({ currentTarget: { id: 'px', value: '10' } })
		expect(wrapper.find('input#px').props().value).toBe('10')
		expect(wrapper.find('input#rem').props().value).toBe('0.625')
	})
	
	test('sets px and rem to empty', () => {
		px.props().onChange({ currentTarget: { id: 'px', value: '' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
	})
	
	test('handle . (dot)', () => {
		px.props().onChange({ currentTarget: { id: 'px', value: '.' } })
		expect(wrapper.find('input#px').props().value).toBe('0.')
		expect(wrapper.find('input#rem').props().value).toBe('0.')
		
		px.props().onChange({ currentTarget: { id: 'px', value: '0..' } })
		expect(wrapper.find('input#px').props().value).toBe('0.')
		expect(wrapper.find('input#rem').props().value).toBe('0.')
		
		px.props().onChange({ currentTarget: { id: 'px', value: '0.1.' } })
		expect(wrapper.find('input#px').props().value).toBe('0.')
		expect(wrapper.find('input#rem').props().value).toBe('0.')
		
		px.props().onChange({ currentTarget: { id: 'px', value: '0.0000' } })
		expect(wrapper.find('input#px').props().value).toBe('0.0000')
		expect(wrapper.find('input#rem').props().value).toBe('0.0000')
	})
	
	test('00 start is not allowed', () => {
		px.props().onChange({ currentTarget: { id: 'px', value: '0' } })
		
		px.props().onChange({ currentTarget: { id: 'px', value: '00' } })
		expect(wrapper.find('input#px').props().value).toBe('0')
		expect(wrapper.find('input#rem').props().value).toBe('0')
	})
	
	test('handle invalid inputs', () => {
		px.props().onChange({ currentTarget: { id: 'px', value: '' } })
		
		px.props().onChange({ currentTarget: { id: 'px', value: 'a' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
		
		px.props().onChange({ currentTarget: { id: 'px', value: '?' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
		
		px.props().onChange({ currentTarget: { id: 'px', value: ' ' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
		
		px.props().onChange({ currentTarget: { id: 'px', value: '_' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
	})
})

describe('Convert rem to px', () => {
	test('10rem is 160px', () => {
		rem.props().onChange({ currentTarget: { id: 'rem', value: '10' } })
		expect(wrapper.find('input#px').props().value).toBe('160')
		expect(wrapper.find('input#rem').props().value).toBe('10')
	})
	
	test('sets px and rem to empty', () => {
		rem.props().onChange({ currentTarget: { id: 'rem', value: '' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
	})
	
	test('handle . (dot)', () => {
		rem.props().onChange({ currentTarget: { id: 'rem', value: '.' } })
		expect(wrapper.find('input#px').props().value).toBe('0.')
		expect(wrapper.find('input#rem').props().value).toBe('0.')
		
		rem.props().onChange({ currentTarget: { id: 'rem', value: '0..' } })
		expect(wrapper.find('input#px').props().value).toBe('0.')
		expect(wrapper.find('input#rem').props().value).toBe('0.')
		
		rem.props().onChange({ currentTarget: { id: 'rem', value: '0.1.' } })
		expect(wrapper.find('input#px').props().value).toBe('0.')
		expect(wrapper.find('input#rem').props().value).toBe('0.')
		
		rem.props().onChange({ currentTarget: { id: 'rem', value: '0.0000' } })
		expect(wrapper.find('input#px').props().value).toBe('0.0000')
		expect(wrapper.find('input#rem').props().value).toBe('0.0000')
	})
	
	test('00 start is not allowed', () => {
		rem.props().onChange({ currentTarget: { id: 'rem', value: '0' } })
		
		rem.props().onChange({ currentTarget: { id: 'rem', value: '00' } })
		expect(wrapper.find('input#px').props().value).toBe('0')
		expect(wrapper.find('input#rem').props().value).toBe('0')
	})
	
	test('handle invalid inputs', () => {
		rem.props().onChange({ currentTarget: { id: 'rem', value: '' } })
		
		rem.props().onChange({ currentTarget: { id: 'rem', value: 'a' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
		
		rem.props().onChange({ currentTarget: { id: 'rem', value: '?' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
		
		rem.props().onChange({ currentTarget: { id: 'rem', value: ' ' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
		
		rem.props().onChange({ currentTarget: { id: 'rem', value: '_' } })
		expect(wrapper.find('input#px').props().value).toBe('')
		expect(wrapper.find('input#rem').props().value).toBe('')
	})
})
