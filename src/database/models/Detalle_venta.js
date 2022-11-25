module.exports = (sequelize, Datatypes)=> {

    alias = 'detalle_venta';

    cols = {
        id: {type: Datatypes.INTEGER , primaryKey: true, autoIncrement: true},
        monto_unitario: {type: Datatypes.FLOAT},
        cantidad: {type: Datatypes.INTEGER},
        venta_id: {type: Datatypes.INTEGER},
        producto_id: {type: Datatypes.INTEGER}
    }

    config = {tableName:'detalle_venta',camelCase: false, timestamps: false}; 

    const detalle_venta = sequelize.define(alias, cols, config)

    detalle_venta.associate = function(modelos){

        detalle_venta.belongsTo(modelos.venta, {
            as: "venta",
            foreignKey: "venta_id"
        });

        detalle_venta.belongsTo(modelos.producto, {
            as: "producto",
            foreignKey: "producto_id"
        });
    }
    return detalle_venta;
}
