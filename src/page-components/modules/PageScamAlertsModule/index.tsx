import { useActiveGuild } from '../../../state/react-query/useActiveGuild'
import { Layout } from '../_layouts/Layout'

export function PageScamAlertsModule() {
	return (
		<Layout>
			<PageInner />
		</Layout>
	)
}

function PageInner() {
	const guild = useActiveGuild()

	return (
		<div>
			<h1 className="mb-2 text-2xl text-white">Scam Alerts</h1>
			<p className="mb-8 text-white/50">
				Keep your community members informed of the latest web3 scams and
				exploits with Shield’s automated alerting.
			</p>
			<div className="grid w-full grid-cols-2 gap-8">
				<div className="flex flex-col space-y-4">
					<p className="text-white">Scam Alerts Channel</p>
					{/* <ChannelSelect currentChannel={data?.scanDiscordChannelId ?? ''} /> */}
					{guild?.scanDiscordChannelId ?? 'Not configured'}
				</div>
			</div>
		</div>
	)
}
