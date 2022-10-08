const precioTotal = document.getElementById("precioTotal");

/* inventario de peliculas disponibles */

const peliculasContainer = document.getElementById("peliculas-container");

fetch("/data.json")
  .then((resp) => resp.json())
  .then((data) => {
    /* crear una funcion para mostrar las peliculas */

    function catalogoDePeliculas(productos) {
      data.forEach((producto) => {
        let cardPeli = document.createElement(`div`);
        cardPeli.classList.add(`col-md-4`);
        cardPeli.style = "width: 16rem";
        cardPeli.innerHTML += ` <div class = "card my-3">;
                                        <img src= "${producto.img}" class = "img-card-top" alt= "${producto.titulo}"> 
                                        <div class= "carPeli-body">
                                            <h5 class= "card-peli-titulo"> ${producto.titulo}</h5>
                                            <p class = "card-text">Precio: $${producto.precio}</p>
                                            <p class = "card-text">Genero: ${producto.genero}</p>
                                            <p class = "card-text">Anio: ${producto.anio}</p>
                                            <p class = "card-text">Duracion: ${producto.duracion}</p> 
                                            <p class = "card-text">Idioma: ${producto.idioma}</p>
                                            <button data-id="${producto.id}" class="btn btn-primary btncomprar m-3">Comprar</button>
                                            <button data-id="${producto.id}" type="button" class="btn btn-outline-info">Info</button>
                                            <span><i data-id="${producto.id}" id="${producto.id}" class="pintarCorazon fa-solid fa-heart"></i></span>
                                        </div>
                                    </div>`;

        peliculasContainer.appendChild(cardPeli);

        // corazones de las cards
        cardPeli.querySelector("i").addEventListener("click", (e) => {
          e.target.classList.toggle("pintarCorazon");
        });

        //boton comprar
        document.addEventListener("click", (e) => {
          if (e.target.matches(".btncomprar")) {
            agregarCarrito(e);
            Swal.fire(
              "Producto agregado a tu carrito!",
              "Dale click al boton!",
              "success"
            );
          }
        });

        //boton eliminar
        document.addEventListener("click", (e) => {
          if (e.target.matches(".btn-danger")) {
            eliminarDelCarrito(e);
          }
        });

        //boton info de la tarjetas
        document.addEventListener("click", (e) => {
          if (e.target.matches(".btn-outline-info")) {
            mostrarInfo(e);
          }
        });

        //funcion para la info de la cards

        function mostrarInfo(e) {
          e = e.target.dataset.id;
          infoId = Number(e);
          info = listaDePeliculas.find((item) => item.id == infoId);

          Swal.fire({
            title: "Descripcion de la Pelicula",
            text: `${info.descripcion}`,
          });
        }
      });
    }
    //funcion para agregar productos en el carrito

    function agregarCarrito(e) {
      const cardNumero = Number(e.target.dataset.id);
      const productoSeleccionado = listaDePeliculas.find(
        (i) => i.id === cardNumero
      );
      const coincidirCard = carrito.findIndex((i) => i.id === cardNumero);

      if (coincidirCard === -1) {
        carrito.push(
          new Producto(
            productoSeleccionado.id,
            productoSeleccionado.titulo,
            productoSeleccionado.genero,
            productoSeleccionado.duracion,
            productoSeleccionado.idioma,
            productoSeleccionado.anio,
            productoSeleccionado.precio,
            productoSeleccionado.img,
            productoSeleccionado.descripcion,
            (productoSeleccionado.cantidad = 1)
          )
        );
      } else {
        carrito[coincidirCard].cantidad++;
      }

      verCarrito();
    }
  });

class Producto {
  constructor(
    id,
    titulo,
    genero,
    duracion,
    idioma,
    anio,
    precio,
    img,
    descripcion,
    cantidad
  ) {
    this.id = id;
    this.titulo = titulo;
    this.genero = genero;
    this.duracion = duracion;
    this.idioma = idioma;
    this.anio = anio;
    this.precio = precio;
    this.img = img;
    this.descripcion = descripcion;
    this.cantidad = cantidad;
  }
}

let carrito = [];

document.addEventListener("DOMContentLoaded", (e) => {
  catalogoDePeliculas(listaDePeliculas);
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    verCarrito();
  }
  /* if (e.target.matches(".corazon2")){
  corazoncards.classList.toggle ('heart-corazon')
} */
});

//boton Modal Comprar

const button = document.querySelector("#botonModalComprar");
button.addEventListener("click", () => {
  Swal.fire({
    title: "Muchas Gracias por tu compra",
    text: "La venta fue guardada con el id 123456. Pronto te llegará una confirmación a tu correo electrónico",
    imageUrl: "assets/img/imagenFinalDeCompra.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    confirmButtonText: "Aceptar",
  });
  carrito.length = 0;
  badge.innerText = 0;
  precioTotal.innerText = 0;
  verCarrito();
});

//boton Informacion

const botonInfo = document.querySelector("#btn-info");
botonInfo.addEventListener("click", () => {
  const { value: text } = Swal.fire({
    input: "textarea",
    inputLabel: "Informacion",
    inputPlaceholder:
      "Un experimento para solucionar el calentamiento global acabó con la mayoría de vida existente en el planeta. El último tren llamado Snowpiercer (Rompenieves) se mueve en círculos por el mundo, a través de un desierto de hielo y nieve. Los últimos supervivientes de la Tierra se amontonan en sus vagones. El joven Curtis (Chris Evans) iniciará una revolución desde los vagones de cola.",
    inputAttributes: {
      "aria-label": "Type your message here",
    },
    showCancelButton: true,
  });

  if (text) {
    Swal.fire(text);
  }
});

//boton corazon

corazon.addEventListener("click", () => {
  corazon.classList.toggle("heart-corazon");
  /*  if (corazon.classList.contains('heart-corazon')) {
    corazon.classList.remove('heart-corazon')
  } else {
    corazon.classList.add('heart-corazon')
  } */
});

//autenticar usuario
const loguinUsuario = [];

async function autenticar() {
  const { value: formAutenticar } = await Swal.fire({
    title: "Registro Usuario",
    html:
      '<div class="form-inline col-sm-12 mt-3">' +
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
    const datosUsuario = Swal.fire({
      title: "Usuario Registrado",
      icon: "success",
      backdrop: false,
    });
    loguinUsuario.push(datosUsuario);
  } else {
    Swal.fire({
      title: "Datos incorrectos",
      icon: "warning",
      backdrop: false,
    });
  }
}

// eliminar uno a uno los productos del carrito
const eliminarDelCarrito = (e) => {
  let eventoId = e.target.dataset.id;
  eventoId = Number(eventoId);
  const item = carrito.findIndex((producto) => producto.id === eventoId);
  carrito.splice(item, 1);
  badge.innerText = 0;
  verCarrito();
};

// funcion para ver carrito

function verCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  const seccionCarrito = document.getElementById("modal-container");
  seccionCarrito.textContent = "";
  precioTotal.textContent = "0";
  carrito.forEach((i) => {
    const div = document.createElement(`div`);
    total = carrito.reduce((a, b) => a + b.precio * b.cantidad, 0);

    div.innerHTML += `<li class="list-group-item text-uppercase bg-dark text-white">
    <span class="badge bg-primary rounded-pill align-middle">${
      i.cantidad
    }</span>
  <span class="lead align-middle">${i.titulo}</span>
</li>
<li class="list-group-item d-flex justify-content-between align-items-center">
  <div>
      <p class="lead mb-0">Total: $<span>${i.cantidad * i.precio}</span></p>
  </div>
  <div>
      <button class="btn btn-sm btn-danger my-2" data-id= "${
        i.id
      }">Restar</button>
     
  </div> </li>`;

    seccionCarrito.appendChild(div);

    let badge = document.getElementById("badge");
    badge.innerText = carrito.length;
    precioTotal.textContent = total;
  });
}

//vaciar carrito
const botonVaciar = document.getElementById("vaciar-carrito");
botonVaciar.classList.add(".btn-secondary");
botonVaciar.addEventListener("click", (e) => {
  carrito.length = 0;
  badge.innerText = 0;
  precioTotal.innerText = carrito.reduce((acc, i) => acc - i.precio, 0);
  verCarrito();
});

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
