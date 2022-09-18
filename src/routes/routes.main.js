const express = require ('express');
const controladorMain = require('../controllers/controller.main.js');
const router = express.Router();

//Rutas

router.get("/", controladorMain.home)

//Exportar

module.exports = router;