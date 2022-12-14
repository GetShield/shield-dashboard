'use client'

import React from 'react'
import useGuildConfig from '../lib/hooks/useGuildConfig'
import useUserGuild from '../lib/hooks/useUserGuild'

const ServerText = () => {
	const { guildId } = useUserGuild()

	const { data } = useGuildConfig({
		guildId
	})

	return (
		<p className="text-white">
			{data?.discordGuildName ?? ''}{' '}
			<span className="text-white/50">| Shield Dashboard</span>
		</p>
	)
}

export default ServerText
