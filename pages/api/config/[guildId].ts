import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { guildConfigSchema } from "../../../lib/types";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const data = await fetch(
          `https://20h8g13gde.execute-api.us-east-1.amazonaws.com/getServer?serverId=${req.query.guildId}`
        ).then((res) => res.json());

        guildConfigSchema.parse(data);

        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        console.log(req.body);
        const data = await fetch(
          `https://20h8g13gde.execute-api.us-east-1.amazonaws.com/updateServer`,
          {
            method: "POST",
            body: JSON.stringify(req.body),
          }
        ).then((res) => res.json());

        res.status(200).json(data);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export default handler;
