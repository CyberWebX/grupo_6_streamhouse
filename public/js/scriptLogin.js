function compruebaNombre(field){
    let todoOk = true;
    let errorNombre = document.getElementById("errorNombre");
    let errores = '';
    if (field.value ==""){
        errores = errores + "Nombre vacío";
        errorNombre.innerHTML = errores;
        errorNombre.style.display="block";
        todoOk=false;
    }
   
    if (todoOk){
       
        errorNombre.style.display="none";
    }
    
}

function compruebaApellido(field){
    let todoOk = true;
    let errorApellido = document.getElementById("errorApellido");
    let errores = '';
    if (field.value ==""){
        errores = errores + "Apellido vacío";
        errorApellido.innerHTML = errores;
        errorApellido.style.display="block";
        todoOk=false;
    }
   
    if (todoOk){
       
        errorApellido.style.display="none";
    }
    
}

function compruebaCorreo(field){
    let todoOk = true;
    let errorEmail = document.getElementById("errorEmail");
    let errores = '';
    if (field.value ==""){
        errores = errores + "Email vacío";
        errorEmail.innerHTML = errores;
        errorEmail.style.display="block";
        todoOk=false;
    }else {
        if (field.value.search("@") ==-1  ){
            errores =  'Correo no Válido.';
            errorEmail.innerHTML = errores;
            errorEmail.style.display="block";
            todoOk=false;
        }
        
     
        
    }
   
    if (todoOk){
       
        errorEmail.style.display="none";
    }
    
}

function compruebaClave(field){
    let todoOk = true;
    let errorClave = document.getElementById("errorClave");
    let errores = '';
    if (field.value ==""){
        errores = errores + "Contraseña vacía";
        errorClave.innerHTML = errores;
        errorClave.style.display="block";
        todoOk=false;
    }else {
        if (field.value.length <6){
            errores =  'Numero de caracteres menor a 6';
            errorClave.innerHTML = errores;
            errorClave.style.display="block";
            todoOk=false;
        }
  
    }
    if (todoOk){
       
        errorClave.style.display="none";
    } 
}

function compruebaRepClave(field){
    let todoOk = true;
    let errorRepClave = document.getElementById("errorRepClave");
    let password = document.getElementById("password");

    let errores = '';
  
    if (field.value !=password.value){
            errores =  'No coinciden las contraseñas';
            errorRepClave.innerHTML = errores;
            errorRepClave.style.display="block";
            todoOk = false;
    }
    if (todoOk){
       
        errorRepClave.style.display="none";
    } 
}

function compruebaAvatar(field){
    let todoOk = true;
    let errorAvatar = document.getElementById("errorAvatar");
    let errores = '';
    if (field.value ==""){
        errores = errores + "Nombre vacío";
        errorAvatar.innerHTML = errores;
        errorAvatar.style.display="block";
        todoOk=false;
    }
   
    if (todoOk){
       
        errorAvatar.style.display="none";
    }
    
}