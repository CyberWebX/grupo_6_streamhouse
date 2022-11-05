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

//Rutas

router.get("/login", controladorUsuarios.login)

router.get("/perfil", controladorUsuarios.perfil)

router.get("/registro", controladorUsuarios.registro);

router.post('/registro', validacionesRegistro, controladorUsuarios.registro);

//Exportar

module.exports = router;