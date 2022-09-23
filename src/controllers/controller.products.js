const controladorProductos = {

    carrito: function (req, res){
        res.render("./products/carrito");
    },

    crear: function (req, res){
        res.render("./products/crear");
    },

    detalle: function (req, res){
        res.render("./products/detalle");
    },

    editar: function (req, res){
        res.render("./products/editar");
    },

    listado: function (req, res){
        res.render("./products/listado");
    },

}

//Exportar

module.exports = controladorProductos