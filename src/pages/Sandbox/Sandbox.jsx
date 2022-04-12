/* eslint-disable */ 
import React, { useState, useRef, useEffect } from 'react'
import ReturnButton from '../../components/ReturnButton'
import Playground, * as test from './Random'

export default function Sandbox() {
	const [counter, setCounter] = useState(0)
	const [output, setOutput] = useState(
		'Press the test button to change this output...'
	)
	const playground = new Playground

	function onTestButtonClick(e) {
		const buttonText = e.target.innerText
		setOutput(`Test ${buttonText}`)
		
		switch (buttonText) {
			case 'A':
				playground.testA()
				break
			case 'B':
				playground.testB()
				break
			case 'C':
				playground.testC()
				break
			case 'D':
				playground.testD()
				break
			case 'E':
				playground.testE()
				break
		}
	}

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
					<button onClick={onTestButtonClick}>A</button>
					<button onClick={onTestButtonClick}>B</button>
					<button onClick={onTestButtonClick}>C</button>
					<button onClick={onTestButtonClick}>D</button>
					<button onClick={onTestButtonClick}>E</button>
				</div>
				
				<div className='outputContainer'>
					<p>{output}</p>
				</div>
			</section>
		</div>
	)
}
