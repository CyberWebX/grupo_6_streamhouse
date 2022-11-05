const {validationResult} = require('express-validator');

const controladorUsuarios = {

    login: function (req, res){
        res.render("./users/login");
    },

    perfil: function (req, res){
        res.render("./users/perfil");
    },

    registro: function (req, res){
        res.render("./users/registro");
    },

}

//Exportar

module.exports = controladorUsuarios