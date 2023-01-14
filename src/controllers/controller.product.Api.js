const { decodeBase64 } = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const { Op } = require("sequelize");


const db = require('../routes/api/database/models');

const controladorProductosApi = {


	listadeProductos: (req, res) => {

		db.producto.findAll({include: [
			{association: 'categoria'},
			{association: 'color'},			
			]}).then((productos) => {
				
				let listaProductos = [];

				for(let producto of productos){
					let varDetail = "localhost:3000/productos/" + producto.id
					let objProducto = {
						id: producto.id,
						nombre: producto.nombre,
						imagen:producto.imagen,
						especificaciones:producto.especificaciones,
						categoria: producto.categoria.nombre,
						color: producto.color.nombre,
						precio: producto.precio,
						detail: varDetail
					}

					listaProductos.push(objProducto);
				}
				
				return res.json({
					descripcion: "Lista de Produtos.",
					codigo:200,
					cantidad:productos.length,
					data: listaProductos

				})
			});
	},

	listade1Producto: (req, res) => {

		db.producto.findAll({include: [
			{association: 'categoria'},
			{association: 'color'},			
			],where: {id:req.params.id}}).then((productos) => {
				
				
				return res.json({
					descripcion: "Produto por Id",
					codigo:200,
					data: productos

				})
			});
	},

	buscarProductos: (req, res) => {

		db.producto.findAll({include: [
			{association: 'categoria'},
			{association: 'color'},			
			],where: {nombre: {
				[Op.substring]: req.params.texto
			  }}}).then((productos) => {
				
				
				return res.json({
					descripcion: "Producto Buscado .",
					codigo:200,
					data: productos

				})
			});
	},

	store:(req, res) => {
		//return res.json(req.body)
		db.producto
			.create(req.body)
			.then(producto => {
				return res.status(200).json({
					data: producto,
					status:200,
					created: 'ok'
				})
			})
	}





}

//Exportar

module.exports = controladorProductosApi