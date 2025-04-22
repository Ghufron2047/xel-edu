import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    imageUrl: { type: String, required: true },
    proofImage: {
      type: String,
      required: true
    },
    notes: String,
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending'
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { collection: 'transactions' }
);

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
