const express = require ('express');
const controladorProductos = require('../controllers/controller.products.js');
const router = express.Router();

//Rutas

router.get("/carrito", controladorProductos.carrito)

router.get("/crearProducto", controladorProductos.crearProducto)

router.get("/detalleProducto", controladorProductos.detalleProducto)

router.get("/editarProducto", controladorProductos.editarProducto)

router.get("/listadoProductos", controladorProductos.listadoProductos)


module.exports = router;