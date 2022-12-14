import { z } from "zod";

export type ToggeableConfigOptions =
  | "scanEnabled"
  | "simulateMintEnabled"
  | "phishingLinkDetectionEnabled";

export const guildConfigSchema = z.object({
  id: z.number(),
  discordGuildId: z.string(),
  discordGuildName: z.string(),
  adminDiscordRoleId: z.string().nullable(),
  scanEnabled: z.boolean(),
  scanCount: z.number(),
  scanDiscordChannelId: z.string().nullable(),
  simulateMintEnabled: z.boolean(),
  simulateMintCount: z.number(),
  simulateDiscordChannelId: z.string().nullable(),
  phishingLinkDetectionEnabled: z.boolean(),
  phishingLinkDetectionCount: z.number(),
  phishingDiscordChannelId: z.string().nullable(),
  contractScans: z.boolean(),
  websiteLinkScans: z.boolean(),
});

export type GuildConfig = z.infer<typeof guildConfigSchema>;
