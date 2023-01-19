const { decodeBase64 } = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { Op } = require("sequelize");


const db = require('../routes/api/database/models');

const controladorCategoriasApi = {


	listadeProductos: (req, res) => {

		db.categoria.findAll().then((productos) => {
				
				let listaProductos = [];

				for(let producto of productos){
					let varDetail = "localhost:3000/productos/" + producto.id
					let objProducto = {
						id: producto.id,
						nombre: producto.nombre,
						
					}

					listaProductos.push(objProducto);
				}
				
				return res.json({
					descripcion: "Lista de Categorias.",
					codigo:200,
					cantidad:productos.length,
					data: listaProductos

				})
			});
	},

	

	

	




}

//Exportar

module.exports = controladorCategoriasApi