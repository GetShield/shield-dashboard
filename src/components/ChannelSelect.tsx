import { Select } from '@mantine/core'
import { useGuildChannels } from '../state/react-query/useGuildChannels'

const ChannelSelect = (props: {
	value: string | null
	onChange: (value: string) => any
	guildId: string | null
}) => {
	const channels = useGuildChannels(props.guildId, 'text')
	const channelsData = (channels.data ?? []).map(c => {
		return {
			label: '#' + c.name,
			value: c.id
		}
	})

	return (
		<>
			<div className="w-72">
				<Select
					data={channelsData}
					value={props.value}
					onChange={props.onChange}
				/>
			</div>
		</>
	)
}

export default ChannelSelect
