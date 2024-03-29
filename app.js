const express = require ('express');
const path = require ('path');
const app = express();
const session = require('express-session');
const methodOverride = require('method-override');
var user;

const cors = require('cors');

app.use(cors());


const rutasMain             = require("./src/routes/routes.main.js")
const rutasProducts         = require ("./src/routes/routes.products.js")
const rutasUsers            = require ("./src/routes/routes.users.js")
const rutasEnConstruccion   = require ("./src/routes/routes.enconstruccion.js")

// ruatas dela api
const rutasApi              = require("./src/routes/routes.Api.js")

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
    saveUninitialized:true,
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

app.use("/api",rutasApi )

//app.use("/api",rutasApi)

// puerto

app.listen(process.env.PORT || 3001, function() {
    console.log("Servidor corriendo");
})
