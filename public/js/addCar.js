function addProduct(id,nombreProducto,precio,imagen){
   console.log("producto agregado :" + nombreProducto +'  ' + precio);
   let productToAdd = {
        id: id,
        nombre: nombreProducto,
        precio: precio
   } 
   let productos = [];
   if (localStorage.getItem("productos")) {
        let productosJson = localStorage.getItem("productos");
        productos = JSON.parse(productosJson);

   }
   productos.push(productToAdd);
   localStorage.setItem("productos",JSON.stringify(productos));
   Swal.fire({
    title: nombreProducto,
    text: "Producto agregado a su carrito de compra",
    imageUrl: imagen,
    imageWidth: 800,
    imageHeight: 400,
    imageAlt: 'Imagen de Producto',
  })
}
