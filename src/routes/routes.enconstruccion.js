const express = require ('express');

const controladorEnconstruccion = require('../controllers/controller.enconstruccion.js');
const router = express.Router();

//Rutas



router.get("/enconstruccion", controladorEnconstruccion.enconstruccion);

//Exportar

module.exports = router;