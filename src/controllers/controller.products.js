const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controladorProductos = {

    carrito: function (req, res){
        res.render("./products/carrito");
    },

    crear: function (req, res){
        res.render("./products/crear");
    },

    almacenar: function (req,res){
        let datos = req.body;
		let idNuevoProducto = (products[products.length-1].id)+1;

		let nuevoProducto ={
			"id": idNuevoProducto,
			"name": datos.name,
			"price": parseInt(datos.price),
			"discount": parseInt(datos.discount),
			"category": datos.category,
			"description": datos.description,
			"image": req.file.filename
		};

		products.push(nuevoProducto);
		fs.writeFileSync(productsFilePath,JSON.stringify(products, null, " "),'utf-8');

		res.redirect('/');
    },

    detalle: function (req, res){
        res.render("./products/detalle");
    },

    editar: function (req, res){
        res.render("./products/editar");
    },

    listado: function (req, res){
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
        res.render("./products/listado", {productos: products});
    },

}

//Exportar

module.exports = controladorProductos