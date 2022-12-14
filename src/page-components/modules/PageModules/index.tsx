import Link from 'next/link'
import Button, { buttonClasses } from '../../../components/Button'
import { useActiveGuild } from '../../../state/react-query/useActiveGuild'
import { useGuildChannels } from '../../../state/react-query/useGuildChannels'
import ContentWrapper from '../_components/ContentWrapper'
import { Layout } from '../_layouts/Layout'

export function PageModules() {
	return (
		<Layout>
			<PageInner />
		</Layout>
	)
}

function PageInner() {
	const guild = useActiveGuild()
	const channels = useGuildChannels(guild?.discordGuildId)
	const scamAlertsDiscordChannelName =
		channels.data?.find(c => c.id === guild?.scamAlertDiscordChannelId)?.name ??
		guild?.scamAlertDiscordChannelId ??
		''

	return (
		<ContentWrapper
			title="Shield Security Modules"
			description="Configure your server security settings for maximum protection."
		>
			<div className="mt-8 w-full">
				<div className="w-full">
					<div className="mt-8 grid h-full grid-cols-3 grid-rows-2 gap-8">
						<div className="flex h-80 w-full flex-col rounded-md bg-secondary p-8">
							<p className="mb-6 text-lg font-medium text-white">
								Simulation Commands
							</p>
							<p className="text-white">
								!scan is <FeatureToggledText enabled={guild?.scanEnabled} />
							</p>
							<p className="mb-8 text-white">
								!simulateMint is{' '}
								<FeatureToggledText enabled={guild?.simulateMintEnabled} />
							</p>
							<div className="flex h-full flex-col justify-end">
								<Link href="/modules/simulation">
									<a
										className={buttonClasses({
											intent: 'secondaryFull'
										})}
									>
										Configure
									</a>
								</Link>
							</div>
						</div>

						<div className="flex h-80 w-full flex-col rounded-md bg-secondary p-8">
							<p className="mb-6 text-lg font-medium text-white">
								Phishing Detection
							</p>
							<p className="text-white">
								Phishing detection is{' '}
								<FeatureToggledText
									enabled={guild?.phishingLinkDetectionEnabled}
								/>
							</p>
							<p className="text-white">Routing alerts to 1 admin</p>
							<div className="flex h-full flex-col justify-end">
								<Link href="/modules/phishing">
									<a
										className={buttonClasses({
											intent: 'secondaryFull'
										})}
									>
										Configure
									</a>
								</Link>
							</div>
						</div>

						<div className="flex h-80 w-full flex-col rounded-md bg-secondary p-8">
							<p className="mb-6 text-lg font-medium text-white">Scam Alerts</p>
							<p className="text-white">
								Daily scam alerts are{' '}
								<FeatureToggledText enabled={guild?.scanEnabled} />
							</p>
							<p className="text-white">
								Routing to{' '}
								<span className="text-sky-400">
									#{scamAlertsDiscordChannelName}
								</span>{' '}
								channel
							</p>
							<div className="flex h-full flex-col justify-end">
								<Link href="/modules/scam-alerts">
									<a
										className={buttonClasses({
											intent: 'secondaryFull'
										})}
									>
										Configure
									</a>
								</Link>
							</div>
						</div>

						<div className="relative flex h-80 w-full flex-col rounded-md bg-secondary p-8">
							<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-black/50">
								<p className="text-white">Coming Soon</p>
							</div>
							<p className="mb-6 text-lg font-medium text-white">
								Bot User Detection
							</p>
							<h1 className="text-4xl text-white">1,145</h1>
							<p className="text-white">user bots banned last week</p>
						</div>

						<div className="relative flex h-80 w-full flex-col rounded-md bg-secondary p-8">
							<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-black/50">
								<p className="text-white">Coming Soon</p>
							</div>
							<p className="mb-6 text-lg font-medium text-white">
								Blacklist & Restricted Users
							</p>
							<h1 className="text-4xl text-white">32</h1>
							<p className="mb-4 text-white">users blacklisted</p>
							<h1 className="text-4xl text-white">6</h1>
							<p className="text-white">users with chat restrictions</p>
							<div className="flex h-full flex-col justify-end">
								<Link href="/modules/restrictions">
									<Button intent={'secondaryFull'} title={'Configure'} />
								</Link>
							</div>
						</div>

						<div className="relative flex h-80 w-full flex-col rounded-md bg-secondary p-8">
							<div className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md bg-black/50">
								<p className="text-white">Coming Soon</p>
							</div>
							<p className="mb-6 text-lg font-medium text-white">Safe Mints</p>
							<p className="text-white">
								Daily safe mints are{' '}
								<span className="text-green-400">enabled</span>
							</p>
							<p className="text-white">
								Routing to <span className="text-sky-400">#alpha</span> channel
							</p>
							<div className="flex h-full flex-col justify-end">
								<Link href="/modules/safe">
									<Button intent={'secondaryFull'} title={'Configure'} />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</ContentWrapper>
	)
}

const FeatureToggledText = (props: { enabled?: boolean }) => {
	return (
		<>
			{props.enabled ? (
				<span className="text-green-400">enabled</span>
			) : (
				<span className="text-red-400">disabled</span>
			)}
		</>
	)
}
