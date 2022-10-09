//evento del boton enviar formulario

const infoFormulario = [];

const formulario = document.querySelector("#idFormulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  mostrarErrores = document.querySelector("#spanCantidad");
  mostrarErrores.classList.add("d-none");
  mostrarErrores.textContent = "";

  let error = "";

  if (inputNombre.value == "") {
    error += `El campo Nombre es Obligatorio.<br>`;
  }
  if (inputEmail.value == "") {
    error += `El campo email es Obligatorio.<br>`;
  }
  if (inputTelefono.value == "") {
    error += `El campo Telefono es Obligatorio.<br>`;
  }
  if (error == "") {
    const datosFinales = {
      nombre: inputNombre.value,
      email: inputEmail.value,
      telefono: inputTelefono.value,
      mensaje: exampleFormControlTextarea2.value,
    };
    infoFormulario.push(datosFinales);

    localStorage.setItem(
      "valores_de_los_input",
      JSON.stringify(infoFormulario)
    );
    formulario.reset();
  } else {
    mostrarErrores.classList.remove("d-none");
    mostrarErrores.innerHTML = error;
  }

  console.log(infoFormulario);
});
