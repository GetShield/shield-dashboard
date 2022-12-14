import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { vApp } from '../valtio/app'
import { useUserGuilds } from './useUserGuilds'

export function useActiveGuild() {
	const sApp = useSnapshot(vApp)
	const guilds = useUserGuilds()
	const guild = guilds.data?.find(
		g => g.discordGuildId === sApp.selectedDiscordGuildId
	)

	useEffect(() => {
		if (
			!guild &&
			(guilds.data?.length ?? 0) > 0 &&
			!sApp.selectedDiscordGuildId
		) {
			vApp.selectedDiscordGuildId = guilds.data![0].discordGuildId
		}
	}, [guilds.data])

	return guild
}
