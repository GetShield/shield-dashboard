import { useEffect } from "react";
import useSWR from "swr";
import { useUserStore } from "../../state/user/useUserStore";
import { GuildConfig } from "../types";

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json());

export default function getGuildConfig({ guildId }: { guildId: string }): {
  data: GuildConfig | undefined;
  triggerUpdate: () => Promise<GuildConfig | undefined>;
} {
  const { data, mutate } = useSWR<GuildConfig>(
    `/api/config/${guildId}`,
    fetcher
  );
  const setGuildConfig = useUserStore((state) => state.setGuildConfig);
  const guildConfig = useUserStore((state) => state.guildConfig);

  useEffect(() => {
    if (data && !guildConfig) {
      setGuildConfig(data);
    }
  }, [data, guildConfig, setGuildConfig]);

  return {
    data,
    triggerUpdate: mutate,
  };
}
