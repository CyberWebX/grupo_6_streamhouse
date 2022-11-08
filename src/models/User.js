const express = require ('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');

const fs = require('fs');


const User = {
    fileName:'../database/user.json',
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


    create: function(userData){
        let allUsers = this.findAll();
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