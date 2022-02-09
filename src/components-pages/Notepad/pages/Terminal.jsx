import { terminal } from '../../../data/notepad.json'

export default function Terminal() {
	const getCommands = () => {
		const getCommands = (commands) => {
			return commands?.map(({ command, description, details }) => {
				return (
					<div key={command} className='note' title={details}>
						<p className='command'>{command}</p>
						<p className='description'>{description}</p>
					</div>
				)
			})
		}
		
		return getCommands(terminal)
	}
	
	return (
		<main className="terminal">
			<h1>Terminal commands</h1>
			<section>{getCommands()}</section>
		</main>
	)
}
