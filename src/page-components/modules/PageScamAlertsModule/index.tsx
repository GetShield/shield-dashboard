import { useMutation } from '@tanstack/react-query'
import Button from '../../../components/Button'
import ChannelSelect from '../../../components/ChannelSelect'
import { apiSaveGuild, queryClient } from '../../../state/api'
import { useOneWayDependencyState } from '../../../state/hook-helpers'
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
	const [guildForm, setGuildForm] = useOneWayDependencyState(guild)
	const mutation = useMutation(async () => {
		if (!guildForm) return
		await apiSaveGuild(guildForm)
		queryClient.invalidateQueries()
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
					<ChannelSelect
						guildId={guild?.discordGuildId ?? null}
						onChange={v =>
							setGuildForm({
								...guildForm!,
								scamAlertDiscordChannelId: v
							})
						}
						value={guildForm?.scamAlertDiscordChannelId ?? null}
					/>
				</div>

				<div className="col-span-2 flex w-full flex-row items-center justify-end">
					{mutation.isSuccess && (
						<p className="mr-4 text-xs text-white">Changes saved.</p>
					)}
					<Button
						onConfirm={() => mutation.mutate()}
						intent={'primary'}
						title={'Save'}
					/>
				</div>
			</div>
		</div>
	)
}
