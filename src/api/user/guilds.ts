import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../../lib/auth";
import { getSession } from "../../../lib/session";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions);

  try {
    const allBotGuildsRes: any[] = await fetch(
      `https://discord.com/api/users/@me/guilds`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      }
    ).then((res) => res.json());

    const allUserGuildsRes: any[] = await fetch(
      `https://discord.com/api/users/@me/guilds`,
      {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    ).then((res) => res.json());

    const allGuildsRes = allBotGuildsRes.filter((guild) => {
      return allUserGuildsRes.some((userGuild) => userGuild.id === guild.id);
    });

    res.status(200).json(allGuildsRes);
  } catch (error) {
    res.status(400).json({ success: false });
  }
}

export default handler;
