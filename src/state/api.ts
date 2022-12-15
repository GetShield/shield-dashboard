import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { AppEnv } from '../env'
import { vUser } from './valtio/user'

export const api = axios.create({
	baseURL: AppEnv.apiBase
})

export function apiSaveGuild(guild: Record<string, any>) {
	return api.put('/updateServer?serverId=' + guild.discordGuildId!, guild, {
		headers: {
			authorization: 'Bearer ' + vUser.tokens.access
		}
	})
}

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false
		}
	}
})
