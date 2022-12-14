'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
	IoAppsSharp,
	IoBrowsersSharp,
	IoChatbubblesSharp,
	IoCodeSharp,
	IoStatsChartSharp,
	IoTicketSharp
} from 'react-icons/io5'

export type Tabs =
	| 'modules'
	| 'dashboard'
	| 'commands'
	| 'admin'
	| 'contact'
	| 'premium'

const tabsContent = {
	dashboard: {
		title: 'Dashboard',
		icon: <IoStatsChartSharp className="mr-4 h-8 w-8 fill-inherit" />
	},
	modules: {
		title: 'Modules',
		icon: <IoAppsSharp className="mr-4 h-8 w-8 fill-inherit" />
	},
	commands: {
		title: 'Commands',
		icon: <IoCodeSharp className="mr-4 h-8 w-8 fill-inherit" />
	},
	admin: {
		title: 'Admin Logs',
		icon: <IoBrowsersSharp className="mr-4 h-8 w-8 fill-inherit" />
	},
	contact: {
		title: 'Contact Us',
		icon: <IoChatbubblesSharp className="mr-4 h-8 w-8 fill-inherit" />
	},
	premium: {
		title: 'Get Premium',
		icon: (
			<IoTicketSharp className="mr-4 h-8 w-8 rotate-45 transform fill-inherit" />
		)
	}
}

export function Tab(props: { tab: Tabs; disabled?: boolean }) {
	const [activeTab, setActiveTab] = useState('modules' as Tabs)
	const isActive = activeTab === props.tab

	return (
		<Link
			className={`${true && 'pointer-events-none opacity-50'}`}
			href={`/${activeTab}`}
		>
			<button
				// onClick={handleSetActive}
				className="flex w-full items-center justify-start pl-8"
			>
				<div
					className={`absolute left-0 h-8 w-1 ${
						isActive ? 'bg-[#2287C3]' : 'bg-transparent'
					}`}
				></div>
				<div className={`${isActive ? 'fill-primary' : 'fill-white/50'}`}>
					{tabsContent[activeTab].icon}
				</div>
				<p className={`text-lg ${isActive ? 'text-white' : 'text-white/50'}`}>
					{tabsContent[activeTab].title}
				</p>
			</button>
		</Link>
	)
}
