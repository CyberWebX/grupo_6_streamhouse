module.exports = (sequelize, Datatypes)=> {

    alias = 'producto';

    cols = {
        id: {type: Datatypes.INTEGER , primaryKey: true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(100)},
        precio: {type: Datatypes.FLOAT},
        fecha_creacion: {type: Datatypes.DATE},
        fecha_baja: {type: Datatypes.DATE},
        imagen: {type: Datatypes.STRING(10000)},
        especificaciones:{type: Datatypes.STRING(200)},
        descuento:{type: Datatypes.FLOAT},
        // imagen

        categoria_id: {type: Datatypes.INTEGER},
        color_id: {type: Datatypes.INTEGER},
        usuario_id: {type: Datatypes.INTEGER}
    }

    config = {tableName:'producto',camelCase: false, timestamps: false}; 

    const producto = sequelize.define(alias, cols, config)

    producto.associate = function(modelos){

        producto.belongsTo(modelos.categoria, {
            as: "categoria",
            foreignKey: "categoria_id"
        });

        producto.belongsTo(modelos.color, {
            as: "color",
            foreignKey: "color_id"
        });

        producto.belongsTo(modelos.usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });

        producto.hasMany(modelos.detalle_venta, {
            as: "detalle_venta",
            foreignKey: "producto_id"
        });
    }
    return producto;
}
