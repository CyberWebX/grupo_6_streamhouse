const express = require ('express');
const controladorMain = require('../controllers/controller.main.js');
//const controladorEnconstruccion = require('../controllers/controller.enconstruccion.js');
const router = express.Router();

//Rutas

router.get("/", controladorMain.home);



//Exportar

module.exports = router;