const express = require ('express');
const controladorProductos = require('../controllers/controller.products.js');
const router = express.Router();

//Rutas

router.get("/carrito", controladorProductos.carrito)

router.get("/crear", controladorProductos.crear)

router.get("/detalle", controladorProductos.detalle)

router.get("/editar", controladorProductos.editar)

router.get("/listado", controladorProductos.listado)

//Exportar

module.exports = router;