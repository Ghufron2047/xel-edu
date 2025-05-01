import mongoose from 'mongoose';

const CheckoutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productId: String,
  productName: String,
  price: Number,
  proofUrl: String,
  status: { type: String, enum: ['pending', 'verified', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Checkout || mongoose.model('Checkout', CheckoutSchema);
