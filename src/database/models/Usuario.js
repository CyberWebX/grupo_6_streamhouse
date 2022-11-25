module.exports = (sequelize, Datatypes)=> {

    alias = 'usuario';

    cols = {
        id: {type: Datatypes.INTEGER , primaryKey: true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(45)},
        apellido: {type: Datatypes.STRING(45)},
        email: {type: Datatypes.STRING(45)},
        clave: {type: Datatypes.STRING(45)},
        admin: {type: Datatypes.BOOLEAN},
        Local_id: {type: Datatypes.INTEGER}
    }

    config = {tableName:'usuario',camelCase: false, timestamps: false}; 

    const usuario = sequelize.define(alias, cols, config)

    usuario.associate = function(modelos){

        usuario.belongsTo(modelos.local, {
            as: "local",
            foreignKey: "local_id"
        });

        usuario.hasMany(modelos.venta, {
            as: "venta",
            foreignKey: "usuario_id"
        });

        usuario.hasMany(modelos.producto, {
            as: "producto",
            foreignKey: "usuario_id"
        });
    }
    return usuario;
}
