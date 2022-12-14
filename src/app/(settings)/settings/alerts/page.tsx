'use client'

import ChannelSelect from '../../../../components/ChannelSelect'
import useGuildConfig from '../../../../lib/hooks/useGuildConfig'
import useUserGuild from '../../../../lib/hooks/useUserGuild'

export default function Home() {
	const { guildId } = useUserGuild()
	const { data } = useGuildConfig({
		guildId: guildId
	})

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
					<ChannelSelect currentChannel={data?.scanDiscordChannelId ?? ''} />
				</div>
			</div>
		</div>
	)
}
