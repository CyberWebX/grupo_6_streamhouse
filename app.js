const express = require ('express');
const path = require ('path');
const app = express();
const publicPath = path.resolve(__dirname, './public');

const rutasMain = require("./src/routes/routes.main.js")
const rutasProducts = require ("./src/routes/routes.products.js")
const rutasUsers = require ("./src/routes/routes.users.js")

// static files

app.use(express.static(publicPath));

// rutas

app.use("/", rutasMain)

app.use("/products", rutasProducts)

app.use("/users", rutasUsers)

// puerto

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})
