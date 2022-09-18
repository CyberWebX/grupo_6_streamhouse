const path = require ('path');

const controladorProductos = {

    carrito: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/products/carrito.html'));
    },

    crearProducto: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/products/crear.producto.html'));
    },

    detalleProducto: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/products/detalle.producto.html'));
    },

    editarProducto: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/products/editar.producto.html'));
    },

    listadoProductos: function (req, res){
        res.sendFile(path.resolve(__dirname, '../views/products/listado.productos.html'));
    },


}

module.exports = controladorProductos