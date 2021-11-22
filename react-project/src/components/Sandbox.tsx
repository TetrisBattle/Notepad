import React from "react"

export default function Sandbox() {
	const counter = React.useRef(0)
	const [print, setPrint] = React.useState(`Counter: ${counter.current}`)
	// const myRef = React.createRef()

	//init
	// React.useEffect(() => {
	// 	console.log("init")
	// 	console.log("end of init")
	// }, [])

	const printCounter = () => {
		counter.current++
		setPrint(() => `Counter: ${counter.current}`)
		console.log(counter.current)
	}

	const test1 = () => {
		console.log("test1")

		// myRef.current.openDialog()
		// myRef.current.click()
		// addClass(".testArea", "addedClass")
		// console.log(getNode(".testArea"))

		console.log("end of test1")
	}

	return (
		<div id="Sandbox">
			<header><h1 className="title">Sandbox</h1></header>

			<section className="printSection">
				<div><h2>{print}</h2></div>
				<button onClick={printCounter}>Print</button>
			</section>
			
			<section className="testArea">
				<h2>Test buttons</h2>

				<div className="testButtonsContainer">
					<button onClick={test1}>Test1</button>
				</div>
			</section>
		</div>
	)
}
