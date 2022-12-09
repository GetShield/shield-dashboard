import useSWR from "swr";

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json());

interface GuildConfig {
  total: number;
  name: string;
  scan: boolean;
  scanCount: number;
  simulateMint: boolean;
  simulateMintCount: number;
  phishingLinkDetection: boolean;
  phishingLinkDetectionCount: number;
  shieldAdmin: string;
  shieldAdminCount: number;
  routeScansTo: string;
  routePhishingLinksTo: string;
  routeScamAlertsTo: string;
}

export default function getGuildConfig({ guildId }: { guildId: string }): {
  data: GuildConfig | undefined;
} {
  const { data } = useSWR<GuildConfig>(`/api/config/${guildId}`, fetcher);

  console.log(data);

  return {
    data,
  };
}
