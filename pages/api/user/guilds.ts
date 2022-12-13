import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../../lib/auth";
import { getSession } from "../../../lib/session";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await unstable_getServerSession(req, res, authOptions);

  try {
    const guildRes = await fetch(`https://discord.com/api/users/@me/guilds`, {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }).then((res) => res.json());

    res.status(200).json(guildRes);
  } catch (error) {
    res.status(400).json({ success: false });
  }
}

export default handler;
