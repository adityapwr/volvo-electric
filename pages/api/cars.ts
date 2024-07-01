// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Cars from "../../public/api/cars.json"

type Car = {
  "id": string,
  "modelName": string,
  "bodyType": string,
  "modelType": string,
  "imageUrl": string
};

type Data = Car[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json(Cars);
}
