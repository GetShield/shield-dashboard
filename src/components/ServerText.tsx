import { useActiveGuild } from '../state/react-query/useActiveGuild'

const ServerText = () => {
	const guild = useActiveGuild()

	return (
		<p className="text-white">
			{guild?.discordGuildName ?? ''}
			{''} <span className="text-white/50">| Shield Dashboard</span>
		</p>
	)
}

export default ServerText
