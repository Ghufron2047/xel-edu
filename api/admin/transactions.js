import dbConnect from "@/lib/dbConnect";
import Checkout from "@/models/Checkout";
import { authMiddleware, isAdmin } from "@/lib/authMiddleware";

export default async function handler(req, res) {
  await dbConnect();
  await authMiddleware(req, res);
  await isAdmin(req, res);

  const { method } = req;
  if (method === "GET") {
    const data = await Checkout.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data });
  }

  if (method === "PUT") {
    const { id, status } = req.body;
    await Checkout.findByIdAndUpdate(id, { status });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ success: false, message: "Method not allowed" });
}
