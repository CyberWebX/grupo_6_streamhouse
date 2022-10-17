const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorMain = {

    home: function (req, res){
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        res.render("./main/home", {productos:products});
    },

}

//Exportar

module.exports = controladorMain