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
var StreamUser;
var vectUsuarioObjetos =[];

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
    //console.log(resultados)
})
.catch( error => {
    console.log("errores query" + error)  
})

const user_modelo = sequelize.define('usuario',{
    "id":{type:Sequelize.INTEGER,primaryKey:true},
    "nombre":Sequelize.STRING,
    "apellido":Sequelize.STRING,
    "email":Sequelize.STRING,
    "clave":Sequelize.STRING,
    "avatar":Sequelize.STRING

},{tableName:'usuario',camelCase: false, timestamps: false})
sequelize.authenticate()
.then(()=> {
    //console.log("Conexion 3Monocuca")
})
.catch( error => {
    console.log(('el error de conexion es' + error))
})
user_modelo.findAll({atributos:['id','nombre','apellido','email','clave','avatar']})
.then(usuario => 
    {
      const resultados = JSON.stringify(usuario)  
    //console.log(resultados);
    
   //console.log(usuario[0].id);
   StreamUser = usuario;
   //console.log(StreamUser);
})
.catch( error => {
    //console.log("errores query" + error)  
})
//console.log("usuarios stream :");
 //console.log(StreamUser);

const User = {
    


   fileName:path.join(__dirname,'../database/user.json'),
    getData: function () {
        //console.log(JSON.parse(fs.readFileSync(this.fileName,'utf-8')));
        //return JSON.parse(fs.readFileSync(this.fileName,'utf-8'));

        let usuario_modelo = sequelize.define('usuario',{
            "id":{type:Sequelize.INTEGER,primaryKey:true},
            "nombre":Sequelize.STRING,
            "apellido":Sequelize.STRING,
            "email":Sequelize.STRING,
            "clave":Sequelize.STRING,
            "avatar":Sequelize.STRING
        
        },{tableName:'usuario',camelCase: false, timestamps: false})
        sequelize.authenticate()
        .then(()=> {
            console.log("Conexion 3Monocuca")
        })
        .catch( error => {
            console.log(('el error de conexion es' + error))
        })
        usuario_modelo.findAll({atributos:['id','nombre','apellido','email','clave','avatar']})
        .then(usuario => 
            {
              const resultados = JSON.stringify(usuario)  
            //console.log(resultados);
            
           //console.log(usuario[0].id);
           
           for (i=1;i<=usuario.length;i++){
            let newUser  = {
                id: usuario[i-1].id,
                nombre:usuario[i-1].nombre,
                apellido:usuario[i-1].apellido,
                email:usuario[i-1].email,
                clave:usuario[i-1].clave,
                avatar:usuario[i-1].avatar
                //password: bcryptjs.hashSync(userData.password,10)

            }
            vectUsuarioObjetos.push(newUser);
            

           }
           console.log(vectUsuarioObjetos);
           
           //console.log(StreamUser);

        })
        .catch( error => {
            console.log("errores query" + error)  
        })
        //console.log("vdafaf");
        //console.log(vectUsuarioObjetos);
        return vectUsuarioObjetos;
        
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
        //console.log("ff");
        //console.log(this.getData());
        return this.getData();
    },
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound
    },
    findByField: function (field,text) {
        let allUsers = this.findAll();
        
        //console.log(allUsers);
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