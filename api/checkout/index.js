import dbConnect from '@/lib/dbConnect';
import Checkout from '@/models/Checkout';
import { verifyToken } from '@/utils/authMiddleware';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // untuk handle upload file
  },
};

export default async function handler(req, res) {
  await dbConnect();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = req.headers.authorization?.split(' ')[1];
  const decoded = verifyToken(token);
  if (!decoded) return res.status(401).json({ error: 'Unauthorized' });

  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(process.cwd(), '/public/uploads/proofs');
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Form parse error' });

    const { productId, productName, price } = fields;
    const proof = files.proof;

    if (!proof || !productId || !price) {
      return res.status(400).json({ error: 'Missing required fields or file' });
    }

    const fileName = path.basename(proof.filepath);

    try {
      const checkout = new Checkout({
        user: decoded.id,
        productId,
        productName,
        price,
        proofUrl: `/uploads/proofs/${fileName}`,
        status: 'pending',
        createdAt: new Date(),
      });

      await checkout.save();
      return res.status(200).json({ message: 'Checkout submitted', data: checkout });
    } catch {
      return res.status(500).json({ error: 'Failed to save checkout' });
    }
  });
}
