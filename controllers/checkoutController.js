const Checkout = require('../models/Checkout');

exports.submitCheckout = async (req, res) => {
  const { name, email, productName } = req.body;
  const proof = req.file?.filename;

  if (!proof) return res.status(400).json({ message: 'Bukti transfer wajib diupload' });

  try {
    const checkout = await Checkout.create({
      name, email, productName,
      proof: `/uploads/${proof}`
    });

    res.status(201).json({ message: 'Checkout sukses', checkout });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
