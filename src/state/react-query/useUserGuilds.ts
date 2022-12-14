import { useQuery } from '@tanstack/react-query'
import { useSnapshot } from 'valtio'
import { api } from '../api'
import { vUser } from '../valtio/user'

export function useUserGuilds() {
	const sUser = useSnapshot(vUser)
	return useQuery(['user-guilds'], () => fetchUserGuilds(), {
		enabled: !!sUser.tokens.access
	})
}

export function fetchUserGuilds() {
	return api
		.get('/discord/guilds', {
			headers: {
				Authorization: `Bearer ${vUser.tokens.access}`
			}
		})
		.then(
			res =>
				res.data as Array<{
					id: number
					discordGuildId: string
					discordGuildName: string
					adminDiscordRoleId: string
					scanEnabled: boolean
					scanCount: number
					scanDiscordChannelId: string
					simulateMintEnabled: boolean
					simulateMintCount: number
					simulateDiscordChannelId: string
					phishingLinkDetectionEnabled: boolean
					phishingLinkDetectionCount: number
					phishingDiscordChannelId: string
					contractScans: boolean
					websiteLinkScans: boolean
				}>
		)
}
