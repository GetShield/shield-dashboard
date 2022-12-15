import { Select } from '@mantine/core'
import { useSnapshot } from 'valtio'
import { useUserGuilds } from '../state/react-query/useUserGuilds'
import { vApp } from '../state/valtio/app'

export function GuildSelector() {
	const sApp = useSnapshot(vApp)
	const guilds = useUserGuilds()
	const guildOptions = (guilds.data ?? []).map(guild => {
		return {
			label: guild.discordGuildName,
			value: guild.discordGuildId
		}
	})

	return (
		<>
			<Select
				data={guildOptions}
				value={sApp.selectedDiscordGuildId}
				onChange={v => {
					vApp.selectedDiscordGuildId = v
				}}
			></Select>
		</>
	)
}
