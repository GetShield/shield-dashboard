import { useQuery } from '@tanstack/react-query'
import { useSnapshot } from 'valtio'
import { api } from '../api'
import { vUser } from '../valtio/user'

export function useUserGuilds() {
	const sUser = useSnapshot(vUser)
	return useQuery(['user-guilds'], () => fetchUserGuilds(), {
		enabled: !!sUser.tokens.refresh
	})
}

export async function fetchUserGuilds() {
	return api
		.get('/discord/guilds', {
			headers: {
				Authorization: `Bearer ${await vUser.getAccessToken()}`
			}
		})
		.then(
			res =>
				res.data as Array<{
					id: number
					discordGuildId: string
					discordGuildName: string
					adminDiscordRoleId: string | null
					scanEnabled: boolean
					scanCount: number
					scanDiscordChannelId: string | null
					simulateMintEnabled: boolean
					simulateMintCount: number
					simulateDiscordChannelId: string | null
					phishingLinkDetectionEnabled: boolean
					phishingLinkDetectionCount: number
					phishingDiscordChannelId: string | null
					scamAlertDiscordChannelId: string | null
					contractScans: boolean
					websiteLinkScans: boolean
				}>
		)
}
