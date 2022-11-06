const express = require ('express');
const controladorUsuarios = require('../controllers/controller.users.js');
const router = express.Router();
const {body} = require ('express-validator');

//Validaciones

const validacionesRegistro = [
    body('nombres').notEmpty().withMessage('Debes completar tus nombres'),
    body('apellidos').notEmpty().withMessage('Debes completar tus apellidos'),
    body('email').isEmail().withMessage('Debes poner un email válido'),
    body('password').notEmpty().withMessage('Contraseña inválida'),
]

const uploadFile =require  ('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');

//Rutas

router.get("/login", controladorUsuarios.login)
//procesar el login
router.post('/login', controladorUsuarios.loginProcess);

router.get("/perfil", controladorUsuarios.perfil)

<<<<<<< HEAD
// formulario de registro
router.get("/registro", controladorUsuarios.registro);
// procesar el registro
router.post('/registro',uploadFile.single('avatar'),validations,controladorUsuarios.processRegister);
=======
router.get("/registro", controladorUsuarios.registro);

router.post('/registro', validacionesRegistro, controladorUsuarios.registro);
>>>>>>> 1e32ee3efb29d2776239b33100074e97697743d7

//Exportar

module.exports = router;