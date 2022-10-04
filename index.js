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
    descripcion,
    cantidad,
    
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

const listaDePeliculas = [
  new Producto(
    1,
    "Capitan america",
    "accion",
    "2:04:00",
    "ingles",
    "2011",
    1500,
    "assets/img/accion8.jpg",
    "Captain America: Civil War” continúa la historia de “Avengers: Age of Ultron”, con Steve Rogers liderando un nuevo equipo de Vengadores en su esfuerzo por proteger a la humanidad. Tras otro incidente internacional relacionado con los Vengadores que ocasiona daños colaterales, la presión política fuerza a crear un sistema de registro y un cuerpo gubernamental para determinar cuándo se requiere los servicios del equipo. El nuevo status quo divide a los Vengadores mientras intentan salvar al mundo de un nuevo y perverso villano."
  ),
  new Producto(
    2,
    "Advenger",
    "accion",
    "2:23:00",
    "ingles",
    "2012",
    1500,
    "assets/img/accion7.jpg",
    "Cuando un enemigo inesperado surge como una gran amenaza para la seguridad mundial, Nick Fury, director de la Agencia SHIELD, decide reclutar a un equipo para salvar al mundo de un desastre casi seguro."
  ),
  new Producto(
    3,
    "El señor de los anillos",
    "aventura",
    "2:59:00",
    "ingles",
    2005,
    1100,
    "assets/img/aventura7.jpg",
    "La Compañía del Anillo se ha disuelto. El portador del anillo Frodo y su fiel amigo Sam se dirigen hacia Mordor para destruir el Anillo Único y acabar con el poder de Sauron. Mientras, y tras la dura batalla contra los orcos donde cayó Boromir, el hombre Aragorn, el elfo Legolas y el enano Gimli intentan rescatar a los medianos Merry y Pipin, secuestrados por los ogros de Mordor. Por su parte, Saurón y el traidor Sarumán continúan con sus planes en Mordor, en espera de la guerra contra las razas libres de la Tierra Media."
  ),
  new Producto(
    4,
    "Jhon Wick",
    "suspenso",
    "1:41:00",
    "ingles",
    "2014",
    1200,
    "assets/img/suspenso7.jpg",
    "John Wick es un antiguo asesino a sueldo de Nueva York que se había retirado de la profesión después de perder a su esposa. Pero, al descubrir la oscura trama que la mafia había planeado para acabar con él, arrebatándole lo que más quería, volverá a introducirse en el negocio, esta vez por su cuenta, para vengarse."
  ),
  new Producto(
    5,
    "SnowPiercer",
    "accion",
    "00:50:00",
    "ingles",
    "2020",
    1200,
    "assets/img/accion4.jpg",
    "Un experimento para solucionar el calentamiento global acabó con la mayoría de vida existente en el planeta. El último tren llamado Snowpiercer (Rompenieves) se mueve en círculos por el mundo, a través de un desierto de hielo y nieve. Los últimos supervivientes de la Tierra se amontonan en sus vagones. El joven Curtis (Chris Evans) iniciará una revolución desde los vagones de cola."
  ),
  new Producto(
    6,
    "La presa",
    "suspenso",
    "01: 40:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso1.jpg",
    "Ambientada hace 300 años en la Nación Comanche. Naru es una joven guerrera, feroz y altamente hábil, que se crió a la sombra de algunos de los cazadores más legendarios que deambulan por las Grandes Llanuras. Cuando el peligro amenaza su campamento, se dispone a proteger a su gente. La presa a la que acecha y, en última instancia, se enfrenta, resulta ser un depredador alienígena evolucionado con un arsenal técnicamente avanzado, lo que deriva en un enfrentamiento cruel y aterrador entre los dos adversarios."
  ),
  new Producto(
    7,
    "La huerfana",
    "suspenso",
    "01:39:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso2.jpg",
    "Tras escapar de un centro psiquiátrico estonio, Leena Klammer viaja a América haciéndose pasar por Esther, la hija desaparecida de una familia adinerada. Pero cuando su máscara empieza a caer, se enfrenta a una madre que protegerá a su familia de la niña asesina a cualquier precio."
  ),
  new Producto(
    8,
    "Proyecto X",
    "suspenso",
    "01:45:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso3.jpg",
    "En 1979, un grupo de jóvenes cineastas se propusieron hacer una película para adultos en la zona rural de Texas, pero cuando sus anfitriones solitarios y ancianos los atrapan en el acto, el elenco pronto se encuentra en una lucha desesperada por sus vidas."
  ),
  new Producto(
    9,
    "Encerrada",
    "suspenso",
    "01:29:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso4.jpg",
    "Una joven madre soltera es cautiva junto con sus dos hijos por un ex violento y debe planear su escape antes de que sea demasiado tarde"
  ),
  new Producto(
    10,
    "Codigo emperador",
    "accion",
    "01:46:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso5.jpg",
    "Juan, un agente del servicio secreto, se acerca a Wendy, una joven filipina que trabaja como criada para una pareja sospechosa."
  ),
  new Producto(
    11,
    "She Will",
    "suspenso",
    "01:45:00",
    "ingles",
    "2022",
    1200,
    "assets/img/suspenso6.jpg",
    "Veronica, una estrella de cine envejecida, se retira a la campiña escocesa con su enfermera Desi para recuperarse de una doble mastectomía. Mientras está allí, fuerzas misteriosas le dan a Veronica el poder de vengarse en sus sueños"
  ),
  new Producto(
    12,
    "La proposicion",
    "romance",
    "01:45:00",
    "ingles",
    "2009",
    1300,
    "assets/img/romance4.jpg",
    "Margaret (Sandra Bullock) es una poderosa y estricta editora de gran éxito de Nueva York que, por un problema con su visado, de repente se enfrenta a ser deportada a Canadá, su país de origen. Para evitarlo y poder mantener su visa en Estados Unidos, la astuta ejecutiva declara que está comprometida con su joven asistente Andrew (Ryan Reynolds), al que lleva torturando durante años. Andrew acepta participar en la farsa, pero con algunas condiciones. La pareja se dirige entonces a Alaska a conocer la peculiar familia de él, y la ejecutiva de ciudad, acostumbrada a tener todo bajo control, se encuentra inmersa en situaciones surrealistas que escapan a cualquier lógica conocida. Con planes de boda en camino y un agente de inmigración tras sus pasos, Margaret y Andrew se comprometen a seguir con el plan previsto pese a las consecuencias"
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


//boton info de la tarjetas
document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-outline-info")) {
   
    mostrarInfo(e);
  }
});

//funcion para la info de la cards

function mostrarInfo (e){
  e = e.target.dataset.id
  infoId = Number(e)
  info = listaDePeliculas.find (item => item.id==infoId)

  Swal.fire({  
  title: 'Descripcion de la Pelicula',
  text: `${info.descripcion}`,
  
})
}



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
carrito.length=0
badge.innerText=0
precioTotal.innerText = 0
verCarrito()
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
  corazon.classList.toggle ('heart-corazon')
 /*  if (corazon.classList.contains('heart-corazon')) {
    corazon.classList.remove('heart-corazon')
  } else {
    corazon.classList.add('heart-corazon')
  } */
}
);




// corazones de las cards

const corazoncards = document.querySelector(".corazon2")

document.addEventListener("click", (e) => {
  if (e.target.matches("corazon2")) {
    corazon.toggleClass("corazon2");
  }
});


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
                                            <button data-id="${producto.id}" type="button" class="btn btn-outline-info">Info</button>
                                            <button class="corazon2" type="submit"><img src="assets/iconos/corazon.jpg" alt="imagen corazon"width="20" height="20"></button>
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
        productoSeleccionado.descripcion,
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





