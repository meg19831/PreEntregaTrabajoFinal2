let carrito = [];

/* inventario de peliculas disponibles */

const peliculasContainer = document.getElementById("peliculas-container");

/* crear una funcion para mostrar las peliculas */

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

let listaDePeliculas = [];
async function fetchData() {
  const res = await fetch("/data.json");
  const data = await res.json();
  listaDePeliculas = data;
}

listaDePeliculas.forEach((producto) => {
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

    //funcion para agregar productos en el carrito

    function agregarCarrito(e) {
      const cardNumero = Number(e.target.dataset.id);
      const producto = data.find((i) => i.id === cardNumero);

      /* const coincidirCard = carrito.findIndex((i) => i.id === cardNumero); */
      /*  if (coincidirCard === -1) {
    carrito.push(

        producto.id,
        producto.titulo,
        producto.genero,
        producto.duracion,
        producto.idioma,
        producto.anio,
        producto.precio,
        producto.img,
        producto.descripcion,
        (producto.cantidad = 1)
      
    );
  } else {
    carrito[coincidirCard].cantidad++;
  }
 */
      const repetir = carrito.some(
        (repeatProduct) => repeatProduct.id === producto.id
      );
      if (repetir) {
        carrito.map((producto) => {
          if (producto.id === producto.id) {
            producto.cantidad++;
          }
        });
      } else {
        carrito.push({
          id: producto.id,
          titulo: producto.titulo,
          genero: producto.genero,
          duracion: producto.duracion,
          idioma: producto.idioma,
          anio: producto.anio,
          precio: producto.precio,
          img: producto.img,
          descripcion: producto.descripcion,
        });
      }
      verCarrito();
    }
  });

  // corazones de las cards
  cardPeli.querySelector("i").addEventListener("click", (e) => {
    e.target.classList.toggle("pintarCorazon");
  });

  //funcion para la info de la cards

  function mostrarInfo(e) {
    e = e.target.dataset.id;
    infoId = Number(e);
    info = data.find((item) => item.id == infoId);

    Swal.fire({
      title: "Descripcion de la Pelicula",
      text: `${info.descripcion}`,
    });
  }

  //boton info de la tarjetas
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-outline-info")) {
      mostrarInfo(e);
    }
  });
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

//boton corazon

corazon.addEventListener("click", () => {
  corazon.classList.toggle("heart-corazon");
});
