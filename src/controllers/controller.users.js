const path = require ('path');

const controladorUsuarios = {

    login: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/users/login.html'));
    },

    perfil: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/users/perfil.html'));
    },

    registro: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/users/registro.html'));
    },

}

module.exports = controladorUsuarios