
function payCar(){
 
  let productos = [];
  if (localStorage.getItem("productos")) {
    let productosJson = localStorage.getItem("productos");
    productos = JSON.parse(productosJson);
   

}
let texto ='';
document.getElementById("divinferior").innerHTML = "<p>Productos en su carrito </p> <br>";


for ( i=0;i<=productos.length - 1;i++){
 
    texto = document.getElementById("divinferior").innerHTML + "<span>"+  productos[i].id +" "+ productos[i].nombre + " "+ productos[i].precio   + "</span> <br>";
    document.getElementById("divinferior").innerHTML =texto;
 }



  

  
}

