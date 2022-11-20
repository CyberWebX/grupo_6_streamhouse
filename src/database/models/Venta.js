function VentaData(sequelize, Datatypes){
    alias = 'Ventas';
    
    cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        fecha: {type: Datatypes.DATE},
        monto_total: {type: Datatypes.FLOAT},
        domicilio_destino: {type: Datatypes.STRING(45)},
        ciudad_destino: {type: Datatypes.STRING(45)},
        Usuario_id: {type: Datatypes.INTEGER}
    }

    config = {camelCase: false, timestamps: false};

    const venta = sequelize.define(alias, cols, config)

    venta.associate = function(modelos){

        venta.belongsTo(modelos.Usuario, {
            as: "usuario",
            foreignKey: "Usuario_id"
        });

        venta.hasMany(modelos.Detalle_venta, {
            as: "Detalle_venta",
            foreignKey: "Venta_id"
        });
    }
    return venta;
}

module.exports = VentaData;
