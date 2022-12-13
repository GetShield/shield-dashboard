import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { guildConfigSchema } from "../../../lib/types";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await fetch(
          `https://api.getshield.xyz/getServer?serverId=${req.query.guildId}`
        ).then((res) => res.json());

        guildConfigSchema.parse(data);

        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        console.log(req.body);
        // guildConfigSchema.parse(req.body);

        const data = await fetch(`https://api.getshield.xyz/updateServer`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(req.body),
        });

        console.log(data);

        res.status(200).json(data);
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
