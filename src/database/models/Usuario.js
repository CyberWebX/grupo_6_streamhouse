module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuarios';
    let cols = {
        id: {
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(45)
        },
        apellido: {
            type: dataTypes.STRING(45)
        },
        email: {
            type: dataTypes.STRING(45)
        },
        clave: {
            type: dataTypes.STRING(45)
        },
        admin: {
            type: dataTypes.BOOLEAN
        },
        Local_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName:'Usuario', 
        camelCase: false, 
        timestamps: false
    }; 

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(modelos){

        Usuario.belongsTo(modelos.local, {
            as: "local",
            foreignKey: "local_id"
        });

        Usuario.hasMany(modelos.venta, {
            as: "venta",
            foreignKey: "usuario_id"
        });

        Usuario.hasMany(modelos.producto, {
            as: "producto",
            foreignKey: "usuario_id"
        });
    }
    return Usuario;
}
