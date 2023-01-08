const express = require ('express');
const path = require ('path');
const app = express();
const session = require('express-session');
const methodOverride = require('method-override');


const rutasMain             = require("./src/routes/routes.main.js")
const rutasProducts         = require ("./src/routes/routes.products.js")
const rutasUsers            = require ("./src/routes/routes.users.js")
const rutasEnConstruccion   = require ("./src/routes/routes.enconstruccion.js")

const {localStorage} = require("node-localstorage");
const store = require("store2");

//localStorage
let carritoCompra = [];
if (store("carritoCompra") ){
    carritoCompra = store("carritoCompra");

}

// session
app.use(session({
    secret: "Shh, Its a secret",
    resave:false,
    saveUninitialized:false,
}));




// ordernar CRUD // 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// method Override
app.use(methodOverride('_method'));




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
