const { decodeBase64 } = require('bcryptjs');
const fs = require('fs');
const path = require('path');

//const productsFilePath = path.join(__dirname, '../data/products.json');
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');

const controladorProductos = {

    carrito: function (req, res){
        res.render("./products/carrito",{user: req.session.userLogged});
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
		
		db.producto.findAll({include: [
			{association: 'categoria'},
			{association: 'color'},			
			],
		where: {id:req.params.id}}).then((productos) => {
				
				let listaProductos = [];
				

				for(let producto of productos){

					let objProducto = {
						id: producto.id,
						nombre: producto.nombre,
						imagen:producto.imagen,
						categoria: producto.categoria.nombre,
						color: producto.color.nombre,
						precio: producto.precio,
						descuento:producto.descuento,
						especificaciones:producto.especificaciones
					}

					listaProductos.push(objProducto);
				}
				console.log(listaProductos[0]);
				
				if (listaProductos.length>0){
					//res.send("producto encontrado");
					console.log("Usuario es :");
        		console.log(req.session.userLogged);
					res.render("./products/detalle", {producto: listaProductos,user: req.session.userLogged});
					
				}else{
					res.send("Producto no encontrado, nada");
				}

				
		
				
				
			});

		
       
	

	},

    editar: function (req, res){

        let idProducto = req.params.id;
    
        let productoBuscado=null;
    
        for (let o of products){
            if (o.id==idProducto){
                productoBuscado=o;
                break;
            }
        }
    
        if (productoBuscado!=null){
            res.render('./products/editar',{producto: productoBuscado,user: req.session.userLogged});
        }
    
        res.send("Producto no encontrado");
    },

    editando: function (req,res){

		let idProducto = req.params.id;

		let datosProducto = req.body;

		let nombreImagenAntigua="";

		for (let o of products){
			if (o.id==idProducto){

				nombreImagenAntigua = o.image;

				o.name = datosProducto.name;
				o.price = parseInt(datosProducto.price);
				o.discount = parseInt(datosProducto.discount);
				o.category = datosProducto.category;
				o.description = datosProducto.description;
				o.image = req.file.filename;
				break;
			}
		}

		fs.writeFileSync(productsFilePath,JSON.stringify(products, null, " "),'utf-8');

		fs.unlinkSync(__dirname+'/../../public/images/productos/'+nombreImagenAntigua);

		res.redirect('/');
		
	},

    eliminar : (req, res) => {

		let idProductoX = req.params.id;

		let nombreImagenAntigua="";

		for (let o of products){
			if (o.id==idProductoX){
				nombreImagenAntigua = o.image;
			}
		}
		
		let NuevaListaProductos = products.filter(function(e){
			return e.id!=idProductoX;
		});

		fs.writeFileSync(productsFilePath,JSON.stringify(NuevaListaProductos, null, " "),'utf-8');

		fs.unlinkSync(__dirname+'/../../public/images/productos/'+nombreImagenAntigua);

		res.redirect('/');

	},

    // listado: function (req, res){
    //     const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
    //     res.render("./products/listado", {productos: products});
    // },


	listado: (req, res) => {

		db.producto.findAll({include: [
			{association: 'categoria'},
			{association: 'color'},			
			]}).then((productos) => {
				
				let listaProductos = [];

				for(let producto of productos){

					let objProducto = {
						id: producto.id,
						nombre: producto.nombre,
						imagen:producto.imagen,
						categoria: producto.categoria.nombre,
						color: producto.color.nombre,
						precio: producto.precio
					}

					listaProductos.push(objProducto);
				}
				
				res.render("./products/listado", {AllProductos: listaProductos,user: req.session.userLogged});
			});
	}




}

//Exportar

module.exports = controladorProductos