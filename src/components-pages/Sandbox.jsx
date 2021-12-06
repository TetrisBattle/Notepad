/* eslint-disable */ 
import React, {useState, useRef, useEffect} from "react"
import { Link } from "react-router-dom"
import LeftArrow from "../images/LeftArrow.png"

export default function Sandbox() {
	const [counter, setCounter] = useState(0)
	const [output, setOutput] = useState(
		"Press the test button to change this output..."
	)

	function testA() {
		const object = {
			name: "Donald",
			lastname: "Duck",
			age: 25,
			hobbies: [
				"football",
				"games",
				"coding"
			],
			city: "Oulu"
		}
		setOutput("Object: " + JSON.stringify(object))
		// alert(JSON.stringify(object))
		// console.log(JSON.stringify(object))
		// console.log(object)
		// console.dir(object)
		console.table(object)
	}

	function testB() {
		setOutput("Test B is empty")
	}

	function testC() {
		setOutput("Test C is empty")
	}

	function testD() {
		setOutput("Test D is empty")
	}

	function testE() {
		setOutput("Test E is empty")
	}

	useEffect(() => {
		// console.log("Render")
	})

	return (
		<div className="Sandbox">
			<Link to="/">
				<img className="returnButton" src={LeftArrow} alt="Return" />
			</Link>
		
			<h1>Sandbox</h1>

			<section className="counterContainer">
				<div><p className="counterText">Counter: {counter}</p></div>
				<button onClick={() => setCounter(counter + 1)}>Count</button>
			</section>
			
			<section className="testArea">
				<h2>Tests</h2>

				<div className="testButtonsContainer">
					<button onClick={testA}>A</button>
					<button onClick={testB}>B</button>
					<button onClick={testC}>C</button>
					<button onClick={testD}>D</button>
					<button onClick={testE}>E</button>
				</div>
				
				<div className="outputContainer">
					<p>{output}</p>
				</div>
			</section>
		</div>
	)
}
