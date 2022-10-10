let carrito = [];

/* inventario de peliculas disponibles */

const peliculasContainer = document.getElementById("peliculas-container");

/* crear una funcion para mostrar las peliculas */

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

let listaDePeliculas = [];
async function fetchData() {
  const res = await fetch("data.json");
  const data = await res.json();
  listaDePeliculas = data;
  CatalogoPeliculas();
}

function CatalogoPeliculas() {
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

    
    //funcion para agregar productos en el carrito

    cardPeli.querySelector(".btncomprar").addEventListener("click",(agregarCarrito))
    function agregarCarrito(e) {
      Swal.fire(
        "Producto agregado a tu carrito!",
        "Dale click al boton!",
        "success",
        "#24E0B8",
        
      );
      const coincidirCard = carrito.findIndex((i) => i.id === producto.id);
      if (coincidirCard === -1) {
        carrito.push(
          new Carrito(
          producto.id,
          producto.titulo,
          producto.precio,
          1
        ));
      } else {
        carrito[coincidirCard].cantidad++;
      }
      verCarrito();
    }

   

    // corazones de las cards
    cardPeli.querySelector("i").addEventListener("click", (e) => {
      e.target.classList.toggle("pintarCorazon");
    });

    //funcion para la info de la cards

    function mostrarInfo(e) {
      e = e.target.dataset.id;
      infoId = Number(e);
      info = listaDePeliculas.find((item) => item.id == infoId);

      Swal.fire({
        title: `${info.titulo}`,
        text: `${info.descripcion}`,
        confirmButtonColor: '#24E0B8',
        background: '#DAEBE7'
      });
    }

    //boton info de la tarjetas
    document.addEventListener("click", (e) => {
      if (e.target.matches(".btn-outline-info")) {
        mostrarInfo(e);
      }
    });
  });
}

class Carrito {
  constructor(id, titulo, precio, cantidad) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

//boton corazon

corazon.addEventListener("click", () => {
  corazon.classList.toggle("heart-corazon");
  
});

