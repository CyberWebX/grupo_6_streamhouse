module.exports = (sequelize, Datatypes)=> {

    alias = 'producto';

    cols = {
        id: {type: Datatypes.INTEGER , primaryKey: true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(45)},
        precio: {type: Datatypes.FLOAT},
        fecha_creacion: {type: Datatypes.DATE},
        fecha_baja: {type: Datatypes.DATE},

        // imagen

        Categoria_id: {type: Datatypes.INTEGER},
        Color_id: {type: Datatypes.INTEGER},
        Usuario_id: {type: Datatypes.INTEGER}
    }

    config = {camelCase: false, timestamps: false}; 

    const producto = sequelize.define(alias, cols, config)

    producto.associate = function(modelos){

        producto.belongsTo(modelos.categoria, {
            as: "categoria",
            foreignKey: "Categoria_id"
        });

        producto.belongsTo(modelos.color, {
            as: "color",
            foreignKey: "Color_id"
        });

        producto.belongsTo(modelos.usuario, {
            as: "usuario",
            foreignKey: "Usuario_id"
        });

        producto.hasMany(modelos.detalle_venta, {
            as: "Detalle_venta",
            foreignKey: "Producto_id"
        });
    }
    return producto;
}
