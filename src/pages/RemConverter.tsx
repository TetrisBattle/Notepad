import { useState } from 'react'
import ReturnButton from '../components/ReturnButton'

export default function RemConverter() {
	const rootPx = 16
	const [px, setPx] = useState(rootPx.toString())
	const [rem, setRem] = useState('1')
	
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.currentTarget.value
		const id = e.currentTarget.id
		
		// 0.00000 is allowed
		if (value === '' || value === '0.' || /0\.0+/.test(value)) {
			setPx(value)
			setRem(value)
			return
		}
		
		if (value === '.') {
			setPx('0.')
			setRem('0.')
			return
		}
		
		if (
			isNaN(+value)
			|| value === '00'
			|| /\s/.test(value) // whitespace is not allowed
		) return
		
		if (id === 'rem') {
			setRem(value)
			setPx((+value * rootPx).toString())
			return
		}
		
		setPx(value)
		setRem((+value / rootPx).toString())
	}
	
	return (
		<div className='RemConverter'>
			<ReturnButton />
			<h1>PX - REM Converter</h1>
			
			<div className='container'>
				<div className='converter'>
					<input
						id='px'
						type='text'
						value={px}
						onChange={handleChange}
						autoComplete='off'
					/>
					<p className='inputType'>px</p>
				</div>
				
				<p className='convertIcon'>⇄</p>
				
				<div className='converter'>
					<input
						id='rem'
						type='text'
						value={rem}
						onChange={handleChange}
						autoComplete='off'
					/>
					<p className='inputType'>rem</p>
				</div>
			</div>
		</div>
	)
}
