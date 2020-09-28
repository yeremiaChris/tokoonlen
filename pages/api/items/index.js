// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { items } from "../../../index";
export default function handler(req, res) {
  res.statusCode = 200;
  res.json(items);
}
