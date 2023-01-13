 module.exports = (sequelize, Datatypes)=> {
    
    alias = 'categoria';
    
    cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(45)}
    }
    
    config = {tableName:'categoria',camelCase: false, timestamps: false}; 
    
    const categoria = sequelize.define(alias, cols, config)
    
    categoria.associate = function(modelos){
        
        categoria.hasMany(modelos.producto, {
            as: "productos",
            foreignKey: "categoria_id"
        });
    }
    return categoria;
}

