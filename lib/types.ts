import { z } from "zod";

export type ToggeableConfigOptions =
  | "scan"
  | "simulateMint"
  | "phishingLinkDetection";

export const guildConfigSchema = z.object({
  serverId: z.string(),
  name: z.string(),
  scan: z.boolean(),
  scanCount: z.number(),
  simulateMint: z.boolean(),
  simulateMintCount: z.number(),
  phishingLinkDetection: z.boolean(),
  phishingLinkDetectionCount: z.number(),
  shieldAdmin: z.string(),
  contractScans: z.boolean(),
  routeScansTo: z.string(),
  routePhishingLinksTo: z.string(),
  routeScamAlertsTo: z.string(),
});

export type GuildConfig = z.infer<typeof guildConfigSchema>;
