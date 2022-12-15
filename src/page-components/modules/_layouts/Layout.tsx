import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { IoNotificationsSharp } from 'react-icons/io5'
import { AuthWidget } from '../../../components/AuthWidget'
import { GuildSelector } from '../../../components/GuildSelector'
import ServerText from '../../../components/ServerText'
import { useActiveGuild } from '../../../state/react-query/useActiveGuild'
import { Tab } from './LayoutTabs'

export function Layout(props: PropsWithChildren) {
	const guild = useActiveGuild()

	return (
		<div className="mx-auto">
			<Head>
				{guild && (
					<title>{guild.discordGuildName + ' | Shield Dashboard'}</title>
				)}
			</Head>

			<div>
				<div className="relative z-10 flex min-h-screen w-full items-start justify-start pl-80">
					<div className="fixed left-0 top-0 flex h-full w-80 flex-col items-center bg-secondary ">
						<div className="p-8">
							<img src="/logo.png" alt="logo" height={200} />
						</div>
						<GuildSelector />
						<div className="mt-8 flex w-full flex-col space-y-8">
							<Tab tab="modules" />
						</div>
						<div className="flex h-full w-full flex-col  items-start justify-end pb-8">
							<Tab tab="premium" />
						</div>
					</div>
					<div className="flex h-full w-full flex-col items-start p-8">
						<div className="mb-16 flex w-full items-center justify-between">
							<ServerText />
							<div className="flex items-center space-x-8">
								<IoNotificationsSharp className="fill-white/50" />
								<AuthWidget />
							</div>
						</div>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	)
}
