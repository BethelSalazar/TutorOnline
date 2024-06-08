const express = require('express');
const router = express.Router();
const Purchase = require('../controllers/Purchase');

router.post('/purchase', async (req, res) => {
  const purchaseData = req.body;
  console.log('Datos recibidos:', purchaseData);

  try {
   
    const newPurchase = new Purchase(purchaseData);

    await newPurchase.save();


    res.status(200).send({ message: 'Compra procesada exitosamente' });
  } catch (error) {
    console.error('Error al procesar la compra:', error);
    res.status(500).send({ message: 'Error al procesar la compra' });
  }
});

module.exports = router;
