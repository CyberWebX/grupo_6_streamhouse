module.exports = (sequelize, Datatypes)=> {
    alias = 'venta';
    
    cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        fecha: {type: Datatypes.DATE},
        monto_total: {type: Datatypes.FLOAT},
        domicilio_destino: {type: Datatypes.STRING(45)},
        ciudad_destino: {type: Datatypes.STRING(45)},
        usuario_id: {type: Datatypes.INTEGER}
    }

    config = {tableName:'venta',camelCase: false, timestamps: false};

    const venta = sequelize.define(alias, cols, config)

    venta.associate = function(modelos){

        venta.belongsTo(modelos.usuario, {
            as: "usuario",
            foreignKey: "usuario_id"
        });

        venta.hasMany(modelos.detalle_venta, {
            as: "detalle_venta",
            foreignKey: "venta_id"
        });
    }
    return venta;
}


