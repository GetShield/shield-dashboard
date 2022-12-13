import { useEffect } from "react";
import useSWR from "swr";
import { useUserStore } from "../../state/user/useUserStore";
import { getSession } from "../session";
import { GuildConfig } from "../types";

const fetcher = async (url: string) =>
  await fetch(url).then((res) => res.json());

export default function useUserGuild(): {
  guildId: string;
} {
  const { data, mutate } = useSWR(`/api/user/guilds`, fetcher);

  console.log("data", data);

  return {
    guildId: "1000",
  };
}
