const bcryptjs = require('bcryptjs');
const {validationResult}= require('express-validator');
//const User = require ('../models/User');
const path = require ('path');

const db = require('../database/models');

const controladorUsuariosApi = {
    listadeUsuarios:(req, res) =>{
        db.usuario.findAll().then((usuarios) => {
				
				let listaUsuarios = [];

				for(let usuario of usuarios){
					let varDetail = "localhost:3000/productos/" + usuario.id
					let objUsuario = {
						id: usuario.id,
						nombre: usuario.nombre,
						email:  usuario.email,
						detail: varDetail
					}

					listaUsuarios.push(objUsuario);
				}
				
				return res.json({
					descripcion: "Lista de Usuarios.",
					codigo:200,
					cantidad:usuarios.length,
					data: listaUsuarios

				})
			});


    },

    listade1Usuario:(req, res) =>{
        db.usuario.findAll({where: {id:req.params.id}}).then((usuarios) => {
				
				let listaUsuarios = [];

				for(let usuario of usuarios){
					let varImagen = "localhost:3000/images/" + usuario.imagen
					let objUsuario = {
						id: usuario.id,
						nombre: usuario.nombre,
						email:  usuario.email,
						imagen: varImagen
					}

					listaUsuarios.push(objUsuario);
				}
				
				return res.json({
					descripcion: "Usuario.",
					codigo:200,
					data: listaUsuarios

				})
			});


    },
    

   
    
   
  

}

//Exportar

module.exports = controladorUsuariosApi