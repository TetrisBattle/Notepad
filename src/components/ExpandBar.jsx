import { useState } from 'react'
import { ReactComponent as ExpandIcon } from 'icons/Expand.svg'

export default function ExpandBars({ commands }) {
	const [expanded, setExpanded] = useState(null)

	return (
		<div className='ExpandBars'>
			{commands.map(({ command, description, details }) => {
				const isExpanded = expanded === details

				return (
					<div key={command} className={'ExpandBar' + (isExpanded ? ' expanded' : '')}>
						<div className='bar'>
							<p>{command}</p>
							<p>{description}</p>
							<ExpandIcon
								style={{ visibility: details ? 'visible' : 'hidden' }}
								onClick={() => setExpanded(isExpanded ? null : details)}
							/>
						</div>
						<div className='content'>
							<p>{details}</p>
						</div>
					</div>
				)
			})}
		</div>
	)
}
