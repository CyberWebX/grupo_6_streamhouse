const path = require ('path');

const controladorMain = {

    home: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/main/home.html'));
    },

}

module.exports = controladorMain