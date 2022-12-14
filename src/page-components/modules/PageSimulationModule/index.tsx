import { useMutation } from '@tanstack/react-query'
import Button from '../../../components/Button'
import { api, queryClient } from '../../../state/api'
import { useOneWayDependencyState } from '../../../state/hook-helpers'
import { useActiveGuild } from '../../../state/react-query/useActiveGuild'
import { vUser } from '../../../state/valtio/user'
import CommandToggle from '../_components/CommandToggle'
import { Layout } from '../_layouts/Layout'

export function PageSimulationModule() {
	return (
		<Layout>
			<PageInner />
		</Layout>
	)
}

function PageInner() {
	const guild = useActiveGuild()
	const [guildForm, setGuildForm] = useOneWayDependencyState(guild)

	const handleToggle = (key: keyof Exclude<typeof guild, undefined>) => {
		if (!guildForm) return
		setGuildForm({
			...guildForm,
			[key]: !guildForm[key]
		})
	}

	const mutation = useMutation(async () => {
		if (!guildForm) return
		await api.put(
			'/updateServer?serverId=' + guildForm.discordGuildId,
			guildForm,
			{
				headers: {
					authorization: 'Bearer ' + vUser.tokens.access
				}
			}
		)
		queryClient.invalidateQueries()
	})
	const handleSaveChanges = () => mutation.mutate()

	return (
		<div>
			<h1 className="mb-2 text-2xl text-white">Simulation Commands</h1>
			<p className="mb-8 text-white/50">
				Drive new engagement in your community with Shield’s NFT mint simulation
				and contract scans.
			</p>
			<div className="grid w-full grid-cols-2 gap-8">
				<div className="flex flex-col space-y-4">
					<p className="text-white">Scan Results Channel</p>
					{/* <ChannelSelect
						currentChannel={guildConfig?.scanDiscordChannelId ?? ''}
					/> */}
				</div>
				<div className="flex flex-col">
					<p className="text-6xl font-medium text-primary">
						{guildForm?.scanCount ?? 0}
					</p>
					<p className="text-white">Shield scans performed all-time</p>
				</div>
				<div className="flex flex-col space-y-4">
					<p className="text-white">Simulation Commands</p>
					<CommandToggle
						enabled={guildForm?.scanEnabled ?? false}
						onToggle={() => handleToggle('scanEnabled')}
						title="!scan"
						description="Scans address for balance/transactions or domain name for phishing"
					/>
					<CommandToggle
						enabled={guildForm?.simulateMintEnabled ?? false}
						onToggle={() => handleToggle('simulateMintEnabled')}
						title="!simulateMint"
						description="Simulate minting NFTs from any given contract"
					/>
				</div>
				<div className="relative flex flex-col space-y-4">
					<p className="text-white">Advanced Settings</p>

					<CommandToggle
						enabled={false}
						onToggle={() => {}}
						title="Smart contract scanning"
					/>
					<CommandToggle
						enabled={false}
						onToggle={() => {}}
						title="Domain link"
					/>
					<CommandToggle
						enabled={false}
						onToggle={() => {}}
						title="Rate limit"
					/>
				</div>
				<div className="col-span-2 flex w-full flex-row items-center justify-end">
					{mutation.isSuccess && (
						<p className="mr-4 text-xs text-white">Changes saved.</p>
					)}
					<Button
						onConfirm={handleSaveChanges}
						intent={'primary'}
						title={'Save'}
					/>
				</div>
			</div>
		</div>
	)
}
