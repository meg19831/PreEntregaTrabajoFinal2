// loguin de los usuarios

//Lista de usuarios registrados 1:usuario activo, 2: nuevo Usuario

function obtenerListaDeUsuarios() {
    let listaDeUsuarios = JSON.parse(localStorage.getItem("listadeUsuariosLs"));
  
    if (listaDeUsuarios == null) {
      //id,nombre, correo, contraseña,tipo de usuario
      listaDeUsuarios = 
      [
         [ `1`,`Eugenia`,`euge@gmail.com`, `1234`,`1`]
         [ `2`,`Gloria`, `gloria@gmail.com`,`5678`, `2`]
      ]
    }
    return listaDeUsuarios;
  
  }
  
  //funcion que indica si la persona puede o no iniciar sesion
  
  function validarUsuario(pCorreo,pContrasena) {
    let listaDeUsuarios = obtenerListaDeUsuarios();
    let bAcceso = false;
  
    for ( i = 0; i < listaDeUsuarios.lengtht ; i++) {
      if (pCorreo == listaDeUsuarios [i][2] && pContrasena== listaDeUsuarios[i][3]){
        bAcceso = true;
        localStorage.setItem (`usuarioActvo`,listaDeUsuarios[i][ 1] + listaDeUsuarios [i][2]);
        localStorage.setItem(`rolUsuario`, listaDeUsuarios [i][4]);
      }
    }
    return bAcceso;
  }
  
  //boton de ingreso
  document.querySelector("#btnIngresar").addEventListener(`click`,iniciarSesion);
  
  function iniciarSesion() {
      let sCorreo = "";
      let sContrasena = "";
      let bAcceso = false;
      
      sCorreo = document.getElementById("txtCorreo").value
      sContrasena = document.getElementById("txtContrasena").value
  
      bAcceso = validarUsuario (sCorreo,sContrasena);
      console.log(bAcceso);
  
  }