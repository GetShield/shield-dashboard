import { Button, Group, Select } from '@mantine/core'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { useGuildChannels } from '../state/react-query/useGuildChannels'

const ChannelSelect = (props: {
	value: string | null
	onChange: (value: string | null) => any
	guildId: string | null
}) => {
	const channels = useGuildChannels(props.guildId, 'text')
	const channelsData = (channels.data ?? [])
		.sort((c1, c2) => {
			return c1.position - c2.position
		})
		.map(c => {
			return {
				label: '#' + c.name,
				value: c.id,
				parent: c.parent
			}
		})

	return (
		<>
			<div className="w-80 flex items-center justify-center">
				<Select
					data={channelsData}
					value={props.value}
					onChange={props.onChange}
					itemComponent={ChannelSelectItem}
					className="w-full"
				/>
				<Button
					variant="subtle"
					color="gray"
					onClick={() => props.onChange(null)}
				>
					Reset
				</Button>
			</div>
		</>
	)
}

export default ChannelSelect

const ChannelSelectItem = forwardRef<
	HTMLDivElement,
	ComponentPropsWithoutRef<'div'> & {
		label: string
		value: string
		parent?: {
			name: string
		}
	}
>(({ label, value, parent, ...others }, ref) => {
	return (
		<div ref={ref} {...others}>
			<Group noWrap>
				<div>
					{parent?.name ? parent.name + ' > ' : ''} {label}
				</div>
			</Group>
		</div>
	)
})
