import { proxy } from 'valtio'

export const vApp = proxy({
	selectedDiscordGuildId: null as string | null
})
