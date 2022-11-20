function detalle_ventaData(sequelize, Datatypes){

    alias = 'detalle_venta';

    cols = {
        id: {type: Datatypes.INTEGER , primaryKey: true, autoIncrement: true},
        monto_unitario: {type: Datatypes.FLOAT},
        cantidad: {type: Datatypes.INTEGER},
        Venta_id: {type: Datatypes.INTEGER},
        Producto_id: {type: Datatypes.INTEGER}
    }

    config = {camelCase: false, timestamps: false}; 

    const detalle_venta = sequelize.define(alias, cols, config)

    detalle_venta.associate = function(modelos){

        detalle_venta.belongsTo(modelos.Venta, {
            as: "venta",
            foreignKey: "Venta_id"
        });

        detalle_venta.belongsTo(modelos.Producto, {
            as: "producto",
            foreignKey: "Producto_id"
        });
    }
    return detalle_venta;
}
module.exports = detalle_ventaData;