import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

// const serverConfigSchema = z.object({
//   total: z.number(),
//   items: z.array(
//     z.object({
//       name: z.string(),
//       scan: z.boolean(),
//       scanCount: z.number(),
//       simulateMint: z.boolean(),
//       simulateMintCount: z.number(),
//       phishingLinkDetection: z.boolean(),
//       phishingLinkDetectionCount: z.number(),
//       shieldAdmin: z.string(),
//       shieldAdminCount: z.number(),
//       routeScansTo: z.string(),
//       routePhishingLinksTo: z.string(),
//       routeScamAlertsTo: z.string(),
//     })
//   ),
// });

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        console.log(req.query.guildId);
        const data = await fetch(
          `https://20h8g13gde.execute-api.us-east-1.amazonaws.com/getServer?serverId=${req.query.guildId}`
        ).then((res) => res.json());

        // serverConfigSchema.parse(data);

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
