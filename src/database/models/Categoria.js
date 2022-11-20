function categoriaData(sequelize, Datatypes){
    
    alias = 'categoria';
    
    cols = {
        id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
        nombre: {type: Datatypes.STRING(45)}
    }
    
    config = {camelCase: false, timestamps: false}; 
    
    const categoria = sequelize.define(alias, cols, config)
    
    categoria.associate = function(modelos){
        
        categoria.hasMany(modelos.Producto, {
            as: "productos",
            foreignKey: "Categoria_id"
        });
    }
    return categoria;
}

module.exports = categoriaData;