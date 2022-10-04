const precioTotal= document.getElementById("precioTotal");

/* inventario de peliculas disponibles */


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
    this.cantidad = cantidad;
  }
}

let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  catalogoDePeliculas(listaDePeliculas);
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    verCarrito();
  }

});

const listaDePeliculas = [
  new Producto(
    1,
    "Capitan america",
    "accion",
    "2:04:00",
    "ingles",
    "2011",
    1500,
    "assets/img/accion8.jpg"
  ),
  new Producto(
    2,
    "Advenger",
    "accion",
    "2:23:00",
    "ingles",
    "2012",
    1500,
    "assets/img/accion7.jpg"
  ),
  new Producto(
    3,
    "El señor de los anillos",
    "aventura",
    "2:59:00",
    "ingles",
    2005,
    1100,
    "assets/img/aventura7.jpg"
  ),
  new Producto(
    4,
    "Jhon Wick",
    "suspenso",
    "1:41:00",
    "ingles",
    "2014",
    1200,
    "assets/img/suspenso7.jpg"
  ),
  new Producto(
    5,
    "SnowPiercer",
    "accion",
    "00:50:00",
    "ingles",
    "2020",
    1200,
    "assets/img/accion4.jpg"
  ),
  new Producto(
    6,
    "La presa",
    "suspenso",
    "01: 40:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso1.jpg"
  ),
  new Producto(
    7,
    "La huerfana",
    "suspenso",
    "01:39:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso2.jpg"
  ),
  new Producto(
    8,
    "Proyecto X",
    "suspenso",
    "01:45:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso3.jpg"
  ),
  new Producto(
    9,
    "Encerrada",
    "suspenso",
    "01:29:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso4.jpg"
  ),
  new Producto(
    10,
    "Codigo emperador",
    "accion",
    "01:46:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso5.jpg"
  ),
  new Producto(
    11,
    "She Will",
    "suspenso",
    "01:45:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso6.jpg"
  ),
  new Producto(
    12,
    "La proposicion",
    "romance",
    "01:45:00",
    "ingles",
    "2009",
    1300,
    "assets/img/romance4.jpg"
  ),
];

//boton comprar
document.addEventListener("click", (e) => {
  if (e.target.matches(".btncomprar")) {
  agregarCarrito(e);
Swal.fire(
    'Producto agregado a tu carrito!',
    'Dale click al boton!',
    'success'
  )}
 
});

//boton eliminar
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-danger")) {
   
    eliminarDelCarrito(e);
  }
});
//boton Modal Comprar

const button = document.querySelector("#botonModalComprar");
button.addEventListener("click", () => {
 Swal.fire({
    title: "Muchas Gracias por tu compra",
    text: "La venta fue guardada con el id 123456. Pronto te llegará una confirmación a tu correo electrónico",
    imageUrl: 'assets/img/imagenFinalDeCompra.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
    confirmButtonText: "Aceptar",
});
});



//boton Informacion

const botonInfo = document.querySelector("#btn-info");
botonInfo.addEventListener("click", () => {
  const { value: text } = Swal.fire({
    input: 'textarea',
    inputLabel: 'Informacion',
    inputPlaceholder: 'Un experimento para solucionar el calentamiento global acabó con la mayoría de vida existente en el planeta. El último tren llamado Snowpiercer (Rompenieves) se mueve en círculos por el mundo, a través de un desierto de hielo y nieve. Los últimos supervivientes de la Tierra se amontonan en sus vagones. El joven Curtis (Chris Evans) iniciará una revolución desde los vagones de cola.',
    inputAttributes: {
      'aria-label': 'Type your message here'
    },
    showCancelButton: true
  })
  
  if (text) {
    Swal.fire(text)
  }
});

//info de las tarejetas
const infoTarjetas = document.querySelector("#btn-outline-info");
infoTarjetas.addEventListener("click", () => {
console.log('estas haciendo click');
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
    const datosUsuario =
    Swal.fire({
      title: "Usuario Registrado",
      icon: "success",
      backdrop: false,
    });
    loguinUsuario.push (datosUsuario)
  } else {
    Swal.fire({
      title: "Datos incorrectos",
      icon: "warning",
      backdrop: false,
    });
  }
}


//boton corazon

corazon.addEventListener("click", () => {
  
  if (corazon.classList.contains('heart-corazon')) {
    corazon.classList.remove('heart-corazon')
  } else {
    corazon.classList.add('heart-corazon')
  }
}
);

//corazones de las Cards
const heart = document.getElementById ('#heart')
heart-corazon.addEventListener("click",() => {
  if (heart.classList.contains('heart-corazon')) {
    
  }else{
    heart.classList.add('heart-corazon')
  }
  console.log('estas haciendo click');
}
);


// eliminar uno a uno los productos del carrito 
const eliminarDelCarrito = (e) => {
  let eventoId=  e.target.dataset.id;
  eventoId = Number (eventoId)
  const item = carrito.findIndex((producto) => producto.id === eventoId);
  carrito.splice(item, 1);
  badge.innerText=0
  verCarrito();

  
};

/* crear una funcion para mostrar las peliculas */

function catalogoDePeliculas(productos) {
  const peliculasContainer = document.getElementById("peliculas-container");
  productos.forEach((producto) => {
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
                                            <button type="button" class="btn btn-outline-info" id ="btn-outline-info">Info</button>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" id="heart" class="bi heart-corazon"viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                          </svg>
                                        </div>
                                    </div>`;

    peliculasContainer.appendChild(cardPeli);
    
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
        (productoSeleccionado.cantidad = 1)
      )
    );
  } else {
    carrito[coincidirCard].cantidad++;
  }
  
  verCarrito();
}

// funcion para ver carrito

function verCarrito() {
  localStorage.setItem("carrito",JSON.stringify(carrito));
  const seccionCarrito = document.getElementById("modal-container");
  seccionCarrito.textContent = "";
  precioTotal.textContent= "0"
  carrito.forEach((i) => {
    const div = document.createElement(`div`);
    total = carrito.reduce((a,b) => a+b.precio*b.cantidad,0)

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
      <button class="btn btn-sm btn-danger my-2" data-id= "${i.id}">Restar</button>
     
  </div> </li>`;

    seccionCarrito.appendChild(div);

    let badge = document.getElementById("badge");
    badge.innerText = carrito.length
    precioTotal.textContent = total
  });
}

//vaciar carrito
const botonVaciar = document.getElementById("vaciar-carrito");
botonVaciar.classList.add(".btn-secondary");
botonVaciar.addEventListener("click", (e) => {
  carrito.length = 0;
  badge.innerText=0
  precioTotal.innerText=carrito.reduce((acc,i)=>acc-i.precio,0)
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





