import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  type: { type: String, default: "transaction" },
  message: String,
  isRead: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Notification || mongoose.model("Notification", NotificationSchema);
