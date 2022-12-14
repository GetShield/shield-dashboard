import { useQuery } from '@tanstack/react-query'
import { api } from '../api'
import { vUser } from '../valtio/user'

export function useGuildChannels(
	guildId: string | null | undefined,
	kind?: 'text' | 'voice'
) {
	return useQuery(
		['guild-channels', guildId],
		() =>
			fetchGuildChannels(guildId!).then(v => {
				const vv = v.map((c, _, arr) => {
					return {
						...c,
						parent: arr.find(p => p.id === c.parent_id)
					}
				})
				return !kind ? vv : vv.filter(c => c.type === (kind === 'text' ? 0 : 2))
			}),
		{
			enabled: !!guildId
		}
	)
}

export async function fetchGuildChannels(guildId: string) {
	return api
		.get('/discord/channels?guildId=' + guildId, {
			headers: {
				Authorization: `Bearer ${await vUser.getAccessToken()}`
			}
		})
		.then(
			res =>
				res.data as Array<{
					id: string
					type: number
					name: string
					position: number
					guild_id: string
					parent_id: string | null
					flags: number
					permission_overwrites: Array<unknown>
				}>
		)
}
