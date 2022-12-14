module.exports = (sequelize, Datatypes)=> {

    alias = 'color';

    cols = {
        id: {type: Datatypes.INTEGER , primaryKey: true, autoIncrement: true},
        nombre: { type: Datatypes.STRING(45)}
    }

    config = {tableName:'color',camelCase: false, timestamps: false};  

    const color = sequelize.define(alias,cols,config)

    color.associate = function(modelos){

        color.hasMany(modelos.producto, {
            as: "producto",
            foreignKey: "color_id"
        });
    }
    return color;
}

