/* eslint-disable */ 
import React, {useState, useRef, useEffect} from 'react'
import ReturnButton from '../components/ReturnButton'
import { binarySearch } from '../usefull/Functions'

export default function Sandbox() {
	const [counter, setCounter] = useState(0)
	const [output, setOutput] = useState(
		'Press the test button to change this output...'
	)

	function testA() {
		const object = {
			name: 'Donald',
			lastname: 'Duck',
			age: 25,
			hobbies: [
				'football',
				'games',
				'coding'
			],
			city: 'Oulu'
		}
		setOutput('Checkout console.log')
		// alert(JSON.stringify(object))
		// console.log(JSON.stringify(object))
		// console.log(object)
		// console.dir(object)
		console.table(object)
	}

	function testB() {
		const array = [1,3,5,7,9]
		setOutput(`BinarySearch: ${binarySearch(array, 2)}`)
	}

	function testC() {
		setOutput('Test C is empty')
	}

	function testD() {
		setOutput('Test D is empty')
	}

	function testE() {
		setOutput('Test E is empty')
	}

	useEffect(() => {
		// console.log('Render')
	})

	return (
		<div className='Sandbox'>
			<ReturnButton />
			<h1>Sandbox</h1>

			<section className='counterContainer'>
				<div><p className='counterText'>Counter: {counter}</p></div>
				<button onClick={() => setCounter(counter + 1)}>Count</button>
			</section>
			
			<section className='testArea'>
				<h2>Tests</h2>

				<div className='testButtonsContainer'>
					<button onClick={testA}>A</button>
					<button onClick={testB}>B</button>
					<button onClick={testC}>C</button>
					<button onClick={testD}>D</button>
					<button onClick={testE}>E</button>
				</div>
				
				<div className='outputContainer'>
					<p>{output}</p>
				</div>
			</section>
		</div>
	)
}
