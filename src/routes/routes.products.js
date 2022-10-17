const multer = require('multer');
const express = require ('express');
const path = require('path');
const controladorProductos = require('../controllers/controller.products.js');
const router = express.Router();

const multerDiskStorage = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/images/productos'));    // Ruta donde almacenamos el archivo
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName = Date.now() + path.extname(file.originalname);   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });



//Rutas

router.get("/carrito", controladorProductos.carrito)

router.get("/crear", controladorProductos.crear)
router.post("/crear",uploadFile.single('newimage'), controladorProductos.almacenar)

router.get("/detalle", controladorProductos.detalle)

router.get("/editar", controladorProductos.editar)

router.get("/", controladorProductos.listado)

//Exportar

module.exports = router;