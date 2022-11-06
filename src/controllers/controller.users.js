<<<<<<< HEAD
const bcryptjs = require('bcryptjs');
const {validationresuilt}= require('express-validator');
const User = require ('../models/User');
=======
const {validationResult} = require('express-validator');
>>>>>>> 1e32ee3efb29d2776239b33100074e97697743d7

const controladorUsuarios = {

    login: function (req, res){
        res.render("./users/login");
    },
    loginProcess: (req,res) => {
       let userToLogin = User.findByField('email',req.body.email);
       if (userToLogin){

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
        if (resultValidation.errors.length >0) {
            return res.render('userRegisterForm', {
                errors: resultValidation.mapped(),
                    oldData: req.body
            });
        }
        let userInDB = User.findByField('email',req.body.email);
        if (userInDB) {
            return res.render('./views/users/registro', {
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
            password: bcryptjs.hashSync(req.body.password,10),
            avatar:req.file.filename
        }

        User.create(userToCreate);
        return res.send('Ok las validadciones pasaron sin errores');
        
    }

}

//Exportar

module.exports = controladorUsuarios