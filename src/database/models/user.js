'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('usuario', {
        id: {allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombres  : {
            allowNull: false,
            type:DataTypes.STRING
        },
        apellidos: {
            allowNull: false,
            type:DataTypes.STRING
        },
        email    : {
            allowNull: false,
            type:DataTypes.STRING
        },
        admin    : {
            allowNull: true,
            defaultValue: 0,
            type: DataTypes.CHAR
        },
        local_id : {
            type: DataTypes.INTEGER
        },
        estado   : {
            allowNull: true,
            defaultValue: 1,
            type: DataTypes.CHAR
        }
    }, {});
    Usuario.associate = function(models) {
        // associations can be defined here
    };
    return Usuario;
};
// Probando sincronización github