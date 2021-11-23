import { useState } from "react"

export default function RemConverter() {
	const rootPx = 16
	const [px, setPx] = useState(rootPx)
	const [rem, setRem] = useState(1)
	
	const handleChange = (e: HTMLInputElement) => {
		if (isNaN(+e.value)) return
		
		if (e.id === "rem") {
			setRem(+e.value)
			setPx(+e.value * rootPx)
			return
		}
		
		setPx(+e.value)
		setRem(+e.value / rootPx)
	}
	
	return (
		<div id="RemConverter">
			<h1>PX - REM Converter</h1>
			
			<div className="converters">
				<div className="converter">
					<label htmlFor="px">Pixels</label>
					<input
						id="px"
						type="text"
						value={px}
						onChange={(e) => handleChange(e.currentTarget)}
					/>
					<p className="inputType">px</p>
				</div>
				
				<span className="convertIcon">⇄</span>
				
				<div className="converter">
					<label htmlFor="rem">REM</label>
					<input
						id="rem"
						type="text"
						value={rem}
						onChange={(e) => handleChange(e.currentTarget)} 
					/>
					<p className="inputType">rem</p>
				</div>
			</div>
		</div>
	)
}