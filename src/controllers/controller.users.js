const bcryptjs = require('bcryptjs');
const {validationResult}= require('express-validator');
const User = require ('../models/User');


const controladorUsuarios = {

    login: function (req, res){
        console.log(req.session);
        res.render("./users/login");
    },
    loginProcess: (req,res) => {
       let userToLogin = User.findByField('email',req.body.email);
       if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password,userToLogin.password);
            if(isOkThePassword) {
                return res.send('ok puedes ingresar');
            }
            return res.render('userLoginForm',{
                errors: {
                    email:{
                        msg: 'Las credenciales son invalidas'
                    }
                }
            });
       }
       return res.render('userLoginForm', {
            errors: {
                email: {
                    msg:'No se encuentra este email en nuestra base de datos'
                }
            }
       });
    },

    perfil: function (req, res){
        res.render("./users/perfil");
    },

    registro: function (req, res){
        res.render("./users/registro");
    },
    processRegister:(req,res) => {
        const  resultValidation = validationResult(req);
       
        //if (resultValidation.errors.length >0) {console.log(resultValidation.errors)}

        if (resultValidation.errors.length >0) {
            return res.render('../views/users/registro', {
                            //userRegisterForm
                            
                errors: resultValidation.mapped(),
                    oldData: req.body
            });
        }
        console.log(req.body.email);
        let userInDB = User.findByField('email',req.body.email);
        if (userInDB) {
            return res.render('./users/registro', {
                errors:{
                    email:{
                        msg:'Este email ya se encuentra registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            
            avatar:req.file.filename
        }

        User.create(userToCreate);
        return res.send('Ok las validadciones pasaron sin errores');
        
    }

}

//Exportar

module.exports = controladorUsuarios