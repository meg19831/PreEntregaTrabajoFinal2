const precioTotal = document.getElementById("precioTotal");
 
 

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
  /* const { value: text } = Swal.fire({
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
  } */
  Swal.fire({
    title: 'Snowpiercer',
    text: 'Un experimento para solucionar el calentamiento global acabó con la mayoría de vida existente en el planeta. El último tren llamado Snowpiercer (Rompenieves) se mueve en círculos por el mundo, a través de un desierto de hielo y nieve. Los últimos supervivientes de la Tierra se amontonan en sus vagones. El joven Curtis (Chris Evans) iniciará una revolución desde los vagones de cola.',
    confirmButtonColor: '#24E0B8',
    background: '#DAEBE7'
    
  })
});

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

  //boton eliminar
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn-danger")) {
      eliminarDelCarrito(e);
    }
  });
  

 document.addEventListener("DOMContentLoaded", (e) => {

    if (localStorage.getItem("carrito")) {
      carrito = JSON.parse(localStorage.getItem("carrito"));
      verCarrito();
    }
    
  }); 