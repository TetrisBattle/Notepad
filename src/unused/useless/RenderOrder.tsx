import { useEffect, useLayoutEffect } from 'react';

export default function Render() {
	useLayoutEffect(() => {
		console.log(3)
	})

	useEffect(() => {
		console.log(4)
	})

	console.log(1)
	
	return (
		<div>
			{console.log(2)}
			Render
		</div>
	)
}
