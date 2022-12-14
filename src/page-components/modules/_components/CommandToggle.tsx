'use client'
import { Switch } from '@mantine/core'

const CommandToggle = (props: {
	enabled: boolean
	onToggle: () => any
	title: string
	description?: string
}) => {
	return (
		<div className="flex items-center justify-between rounded-md border border-white/50 bg-black p-8">
			<div className="flex flex-col justify-center">
				<p className="text-white">{props.title}</p>
				{props.description && (
					<p className="text-sm text-white/50">{props.description}</p>
				)}
			</div>
			<Switch
				checked={props.enabled}
				onChange={() => {
					props.onToggle()
				}}
				className={`${
					props.enabled ? 'bg-primary' : 'border border-white/50'
				} relative inline-flex h-6 w-11 items-center rounded-full`}
				label=""
			></Switch>
		</div>
	)
}

export default CommandToggle
