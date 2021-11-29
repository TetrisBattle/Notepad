import { useState } from "react"

export default function RemConverter() {
	const rootPx = 16
	const [px, setPx] = useState(rootPx.toString())
	const [rem, setRem] = useState("1")
	
	const handleChange = (e: HTMLInputElement) => {
		if (e.value === "") {
			setPx(e.value)
			setRem(e.value)
			return
		}
		
		if (e.value === ".") {
			if (e.id === "rem") {
				setPx("0")
				setRem("0" + e.value)
				return
			}
			setPx("0" + e.value)
			setRem("0")
			return
		}
		
		if (isNaN(+e.value) || e.value === " ") return
		
		if (e.id === "rem") {
			setRem(e.value)
			setPx((+e.value * rootPx).toString())
			return
		}
		
		setPx(e.value)
		setRem((+e.value / rootPx).toString())
	}
	
	return (
		<div className="RemConverter">
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