const express = require('express');
const router = express.Router();
const {
  getAllCuentas,
  getCuentaById,
  getCuentaByQuery,
  getCuentasBalance
} = require('../controllers/cuentascontroller');

// GET /cuentas
router.get('/', getAllCuentas);

// GET /cuentas?queryParam=valor
router.get('/search', getCuentaByQuery);

// GET /cuenta/:id
router.get('/:id', getCuentaById);

// GET /cuentasBalance
router.get('/balance/total', getCuentasBalance);

module.exports = router;