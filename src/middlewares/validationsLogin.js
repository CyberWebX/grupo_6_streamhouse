const path = require('path');
const {body} = require('express-validator');

moduleexports = [
    body('email')
    .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Tienes que escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    
  
    
    
    
    ];

    module.exports = moduleexports;