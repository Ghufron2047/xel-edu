import dbConnect from "@/lib/dbConnect";
import Checkout from "@/models/Checkout";
import { authMiddleware } from "@/lib/authMiddleware";

export default async function handler(req, res) {
  await dbConnect();
  await authMiddleware(req, res);

  const history = await Checkout.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: history });
}
