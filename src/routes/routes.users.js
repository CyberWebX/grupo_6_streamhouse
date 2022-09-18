const express = require ('express');
const controladorUsuarios = require('../controllers/controller.users.js');
const router = express.Router();

//Rutas

router.get("/login", controladorUsuarios.login)

router.get("/perfil", controladorUsuarios.perfil)

router.get("/registro", controladorUsuarios.registro)


module.exports = router;