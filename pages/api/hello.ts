import type { NextApiRequest, NextApiResponse } from "next";
export type Data = {
  name: string;
};
export default function helloMessage(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ name: "John Doe" });
}
