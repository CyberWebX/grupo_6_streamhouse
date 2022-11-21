function colorData(sequelize, Datatypes){

    alias = 'color';

    cols = {
        id: {type: Datatypes.INTEGER , primaryKey: true, autoIncrement: true},
        nombre: { type: Datatypes.STRING(45)}
    }

    config = {camelCase: false, timestamps: false};  

    const color = sequelize.define(alias,cols,config)

    color.associate = function(modelos){

        color.hasMany(modelos.Producto, {
            as: "producto",
            foreignKey: "Color_id"
        });
    }
    return color;
}
module.exports = colorData;
