const express = require ('express');
const multer = require("multer");
const controladorUsuarios = require('../controllers/controller.users.js');
const router = express.Router();
const {body} = require ('express-validator');
const path = require ("path");

//Validaciones

//const validacionesRegistro = [
//    body('nombres').notEmpty().withMessage('Debes completar tus nombres'),
//    body('apellidos').notEmpty().withMessage('Debes completar tus apellidos'),
 ////   body('email').isEmail().withMessage('Debes poner un email válido'),
//    body('password').notEmpty().withMessage('Contraseña inválida'),
//]

const uploadFile =require  ('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const validationsLogin = require('../middlewares/validationsLogin');
//Rutas

router.get("/login", controladorUsuarios.login)
//procesar el login
router.post('/login',validationsLogin, controladorUsuarios.loginProcess);

router.get("/perfil", controladorUsuarios.perfil);

// formulario de registro
router.get("/registro", controladorUsuarios.registro);

// procesar el registro
router.post('/registro',uploadFile.single('avatar'),validations,controladorUsuarios.processRegister);
                                                //  

//Exportar

module.exports = router;