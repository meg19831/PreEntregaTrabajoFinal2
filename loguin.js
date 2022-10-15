//autenticar usuario
const loguinUsuario = []; 



async function autenticar() {
  loguinUsuario.length = 0;
  mostrarUsuarios = document.querySelector("#spanCantidad");
  mostrarUsuarios.classList.add("d-none");
  mostrarUsuarios.textContent = "";
  const { value: formAutenticar } = await Swal.fire({
    title: "Registro Usuario",
    html:
      '<div class="form-inline col-sm-12 mt-3" >' +
      '<label class="control-label col-sm-4" for="UserName">Usuario</label>' +
      '<input required="" class="form-control col-sm-7" id="UserName" name="usuario" type="text" autofocus style="color: #2e7d32;">' +
      "</div>" +
      '<div class="form-inline col-sm-12 mt-3">' +
      '<label class="control-label col-sm-4" for="UserPass">Contraseña</label>' +
      '<input required="" class="form-control col-sm-7" id="UserPass" name="clave" type="password" style="color: #2e7d32;">' +
      "</div>",
    backdrop: false,
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "Guardar",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#40B340",
    cancelButtonColor: "#FF0000",
    showCloseButton: true,
    focusConfirm: true,
    focusCancel: false,
    preConfirm: () => {
      return [
        document.getElementById("UserName").value,
        document.getElementById("UserPass").value,
        
      ];
      
    },
    onOpen: (modal) => {
      confirmOnEnter = (event) => {
        if (event.keyCode === 13) {
          event.preventDefault();
          modal.querySelector(".swal2-confirm").click();
        }
      };
      modal
        .querySelector("#UserName")
        .addEventListener("keyup", confirmOnEnter);
      modal
        .querySelector("#UserPass")
        .addEventListener("keyup", confirmOnEnter);
    },
  });

  

  if (formAutenticar && formAutenticar[0] != "" && formAutenticar[1] != "") {
    const datosUsuario = document.querySelector("#UserName").value
    localStorage.setItem("UserName ",JSON.stringify(loguinUsuario))
    localStorage.getItem("UserName ",JSON.stringify(loguinUsuario))
    loguinUsuario.push(datosUsuario);
    Swal.fire({
      title: "Usuario Registrado",
      icon: "success",
      backdrop: false,
    });
    
  } else {
    Swal.fire({
      title: "Datos incorrectos. Ingrese Usuario y Contaseña",
      icon: "warning",
      backdrop: false,
    });
    mostrarUsuarios.classList.remove("d-none");
    mostrarUsuarios.innerHTML = error;
  }
  /* loguinUsuario.remove(); */
  
}



//finalizar compra 
document.addEventListener("DOMContentLoaded", (e) => {

  if (localStorage.getItem("loguinUsuario")) {
    loguinUsuario = JSON.parse(localStorage.getItem("loguinUsuario"));
    
  }
  
}); 
