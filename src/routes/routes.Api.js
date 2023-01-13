const express = require ('express');
const path = require('path');

const router = express.Router();
const controladorProductosApi = require('../controllers/controller.product.Api.js');

// Rutas
router.get("/productos", controladorProductosApi.listadeProductos)

//Exportar

module.exports = router;