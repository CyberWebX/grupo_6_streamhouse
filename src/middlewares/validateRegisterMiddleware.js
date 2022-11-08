const path = require('path');
const {body} = require('express-validator');

moduleexports = [
    body('nombres').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('apellidos').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
    .notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Tienes que escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('password2').notEmpty().withMessage('Tienes que repetir la  contraseña'),
    body('avatar').custom ((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg','.png','.gif'];
    
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        }
        else{
            let fileExtension = path.extname(file.originalname);
            
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(',')}') ` );
                //aca arriba van las comillas raras 
            }
        }
        
        return true;
    })
    
    
    
    ];

    module.exports = moduleexports;