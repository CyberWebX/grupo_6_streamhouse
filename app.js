const express = require ('express');
const path = require ('path');
const app = express();


const rutasMain             = require("./src/routes/routes.main.js")
const rutasProducts         = require ("./src/routes/routes.products.js")
const rutasUsers            = require ("./src/routes/routes.users.js")
const rutasEnConstruccion   = require ("./src/routes/routes.enconstruccion.js")

//templete engine

app.set('views', path.join(__dirname,'./src/views'))
app.set('view engine', "ejs");

// static files

app.use(express.static("public"));

// rutas

app.use("/", rutasMain)

app.use("/products", rutasProducts)

app.use("/users", rutasUsers)

app.use("/enconstruccion", rutasEnConstruccion)

// puerto

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo");
})
