// backend/routes/classes.js
const express = require('express');
const router = express.Router();
const { getClasses, addClass } = require('../controllers/classesController');

router.get('/', getClasses);
router.post('/', addClass);

module.exports = router;
