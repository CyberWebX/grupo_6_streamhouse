const express = require ('express');
const path = require('path');
const { resourceLimits } = require('worker_threads');

const router = express.Router();
const controladorProductosApi = require('../controllers/controller.product.Api.js');
const controladorUsuariosApi =  require('../controllers/controller.users.Api.js');

// Rutas
    //Rutas Productos
        router.get("/productos", controladorProductosApi.listadeProductos)
        router.get("/productos/:id",controladorProductosApi.listade1Producto)
        router.get("/productos/buscar/:texto",controladorProductosApi.buscarProductos)

        router.post("/productos/crear/",controladorProductosApi.store)

    //Rutas Usuarios
       router.get("/usuarios", controladorUsuariosApi.listadeUsuarios)
       router.get("/usuarios/:id", controladorUsuariosApi.listade1Usuario)

//Exportar

module.exports = router;