const { decodeBase64 } = require('bcryptjs');
const fs = require('fs');
const path = require('path');



const db = require('../routes/api/database/models');

const controladorProductosApi = {


	listadeProductos: (req, res) => {

		db.producto.findAll({include: [
			{association: 'categoria'},
			{association: 'color'},			
			]}).then((productos) => {
				
				
				return res.json({
					descripcion: "Lista de Produtos",
					codigo:200,
					data: productos

				})
			});
	},

	listade1Producto: (req, res) => {

		db.producto.findAll({include: [
			{association: 'categoria'},
			{association: 'color'},			
			],where: {id:req.params.id}}).then((productos) => {
				
				
				return res.json({
					descripcion: "Lista de Produtos",
					codigo:200,
					data: productos

				})
			});
	}




}

//Exportar

module.exports = controladorProductosApi