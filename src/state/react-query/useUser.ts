import { useQuery } from '@tanstack/react-query'
import { useSnapshot } from 'valtio'
import { api } from '../api'
import { vUser } from '../valtio/user'

export function useUser() {
	const sUser = useSnapshot(vUser)
	return useQuery(['user'], () => fetchUser(), {
		enabled: !!sUser.tokens.refresh
	})
}

export async function fetchUser() {
	return api
		.get('/auth/me', {
			headers: {
				Authorization: `Bearer ${await vUser.getAccessToken()}`
			}
		})
		.then(
			res =>
				res.data as {
					id: number
					discordUserId: string
					username: string
					discriminator: string
					avatarUrl: string | null
					email: string | null
				}
		)
}
