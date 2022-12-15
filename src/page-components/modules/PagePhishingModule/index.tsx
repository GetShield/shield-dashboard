import { useMutation } from '@tanstack/react-query'
import Button from '../../../components/Button'
import ChannelSelect from '../../../components/ChannelSelect'
import { apiSaveGuild, queryClient } from '../../../state/api'
import { useOneWayDependencyState } from '../../../state/hook-helpers'
import { useActiveGuild } from '../../../state/react-query/useActiveGuild'
import { Layout } from '../_layouts/Layout'

export function PagePhishingModule() {
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
			<h1 className="mb-2 text-2xl text-white">Phishing Detection</h1>
			<p className="mb-8 text-white/50">
				Shield auto-deletes any phishing links posted in your server to protect
				your community.
			</p>
			<div className="grid w-full grid-cols-2 gap-8">
				<div className="flex flex-col space-y-4">
					<p className="text-white">Phishing Reports Channel</p>
					<ChannelSelect
						guildId={guild?.discordGuildId ?? null}
						onChange={v =>
							setGuildForm({
								...guildForm!,
								phishingDiscordChannelId: v
							})
						}
						value={guildForm?.phishingDiscordChannelId ?? null}
					/>
				</div>
				<div className="flex flex-col">
					<p className="text-6xl font-medium text-primary">
						{guild?.phishingLinkDetectionCount ?? 0}
					</p>
					<p className="text-white">Phishing links blocked all-time</p>
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
