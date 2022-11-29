const express = require ('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const Sequelize = require('sequelize');
const sequelize = new Sequelize('cyberweb_streamhouse','cyberweb_streamhouse6', 'DigitalHouse6?',
{
    host:'168.194.198.1',
    dialect:'mysql'
})

//definimos el modelo
const producto_modelo = sequelize.define('producto',{
    "id":{type:Sequelize.INTEGER,primaryKey:true},
    "nombre":Sequelize.STRING
},{tableName:'producto',camelCase: false, timestamps: false})
sequelize.authenticate()
.then(()=> {
    console.log("Conexion Monocuca")
})
.catch( error => {
    console.log(('el error de conexion es' + error))
})

producto_modelo.findAll({atributos:['id','nombre']})
.then(producto => 
    {
      const resultados = JSON.stringify(producto)  
    console.log(resultados)
})
.catch( error => {
    console.log("errores query" + error)  
})

const User = {
    


   fileName:path.join(__dirname,'../database/user.json'),
    getData: function () {
        
        return JSON.parse(fs.readFileSync(this.fileName,'utf-8'));
        
    },
    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id +1;
        
        }  else {
            return 1;
        }      
        
    },
    findAll: function() {
        
        return this.getData();
    },
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound
    },
    findByField: function (field,text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound
    },
    findByFieldLogic: function (field,text) {
        console.log("entre al metodo")
        let allUsers = this.findAll();
        let userFound = [];
        userFound = allUsers.find(oneUser => oneUser[field] === text);
        if (userFound){
           
           
            return true;
            
        }else{
            
            return false;
        }
    },

    create: function(userData){
        
        let allUsers = this.findAll();
        delete userData.password2;
        let newUser  = {
            id: this.generateId(),
            ...userData,
            password: bcryptjs.hashSync(userData.password,10)
        }
        allUsers.push(newUser);
        
        fs.writeFileSync(this.fileName,JSON.stringify(allUsers,null, ' '));
        
        return newUser;

    },
    delete: function(id) {
        
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id );
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers,null,' '));
        return true;
    }
}
//console.log(User.generateId());
//console.log(User.create({"nombres":"mario","apellidos":"Rovira","password":"123456","avatar":"default.png"}));
module.exports = User;