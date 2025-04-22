import dbConnect from '@/lib/dbConnect';
import Transaction from '@/models/Transaction';
import { verifyToken } from '@/utils/authMiddleware';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ error: 'Unauthorized' });

  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), '/public/uploads'),
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Upload error' });

    const { productId, notes } = fields;
    const proofFile = files.proof;

    if (!proofFile) return res.status(400).json({ error: 'Proof image is required' });

    const imageUrl = '/uploads/' + path.basename(proofFile[0].filepath);

    try {
      await Transaction.create({
        userId: decoded.id,
        productId,
        notes,
        proofImage: imageUrl,
        status: 'pending',
      });

      return res.status(200).json({ message: 'Checkout submitted' });
    } catch {
      return res.status(500).json({ error: 'Failed to save transaction' });
    }
  });
}
