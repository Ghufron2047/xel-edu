import nc from "next-connect";
import { authMiddleware, isAdmin } from "@/lib/authMiddleware";

const handler = nc()
  .use(authMiddleware)
  .use(isAdmin)
  .get(async (req, res) => {
    // hanya admin bisa sampai sini
    res.json({ success: true, message: "Admin Access Granted", user: req.user });
  });

export default handler;
