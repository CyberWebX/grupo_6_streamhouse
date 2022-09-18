const controladorProductos = {

    carrito: function (req, res){
        res.render("./products/carrito");
    },

    crearProducto: function (req, res){
        res.render("./products/crear.producto");
    },

    detalleProducto: function (req, res){
        res.render("./products/detalle.producto");
    },

    editarProducto: function (req, res){
        res.render("./products/editar.producto");
    },

    listadoProductos: function (req, res){
        res.render("./products/listado.productos");
    },

}

//Exportar

module.exports = controladorProductos