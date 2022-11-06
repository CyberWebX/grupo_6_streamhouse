const express = require ('express');
const controladorUsuarios = require('../controllers/controller.users.js');
const router = express.Router();

const uploadFile =require  ('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');

//Rutas

router.get("/login", controladorUsuarios.login)
//procesar el login
router.post('/login', controladorUsuarios.loginProcess);

router.get("/perfil", controladorUsuarios.perfil)

// formulario de registro
router.get("/registro", controladorUsuarios.registro);
// procesar el registro
router.post('/registro',uploadFile.single('avatar'),validations,controladorUsuarios.processRegister);

//Exportar

module.exports = router;