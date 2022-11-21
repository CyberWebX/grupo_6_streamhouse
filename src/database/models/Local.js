function localData(sequelize, Datatypes){

    alias = 'local';

    cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(45)}
    }

    config = {camelCase: false, timestamps: false}; 

    const local = sequelize.define(alias, cols, config)

    local.associate = function(modelos){

        local.hasMany(modelos.Usuario, {
            as:"usuario",
            foreignKey:"Local_id"
        });
    }
    return local;
}
module.exports = localData;