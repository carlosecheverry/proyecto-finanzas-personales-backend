const express = require('express');
const router = express.Router();

const GastoRoutes = require('./GastoRoutes');
const CategoriaRoutes = require('./CategoriaRoutes');

router.use(GastoRoutes);
router.use(CategoriaRoutes);

module.exports = router;