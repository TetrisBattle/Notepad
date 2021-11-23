import { useState } from "react"

export default function RemConverter() {
	const [px, setPx] = useState(16)
	const [rem, setRem] = useState(1)
	
	const handleChange = (e: HTMLInputElement) => {
		if (isNaN(+e.value)) return
		
		
		if (e.className === "rem") {
			setRem(+e.value)
			setPx(+e.value * 16)
			return
		}
		
		setPx(+e.value)
		setRem(+e.value / 16)
	}
	
	return (
		<div id="RemConverter">
			<h1>PX - REM Converter</h1>
			
			<div className="converters">
				<div className="converter">
					<p>Pixels</p>
					<input
						className="px"
						type="text"
						value={px}
						onChange={(e) => handleChange(e.currentTarget)}
					/>
					<p className="inputType">px</p>
				</div>
				
				<span className="convertIcon">⇄</span>
				
				<div className="converter">
					<p>REM</p>
					<input
						className="rem"
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