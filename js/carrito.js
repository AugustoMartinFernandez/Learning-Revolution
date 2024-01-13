document.addEventListener("DOMContentLoaded", function () {
  let cursos = [
    {
      nombre: "Pack de Cursos de Trading desde 0",
      imagen: "../images/Cursotrading.png",
      enlace: "",
      precioOriginal: "$7.000,00",
      precioOferta: "$2.000,00",
    },
    {
      nombre: "Pack de Cursos de Desarrollo Web",
      imagen: "../images/Desarrolloweb.png",
      enlace: "",
      precioOriginal: "$9.000,00",
      precioOferta: "$5.500,00",
    },
    {
      nombre: "Pack de Cursos de Hostinger",
      imagen: "../images/hostinger.png",
      enlace: "",
      precioOriginal: "$5.000,00",
      precioOferta: "$2.000,00",
    },
    {
      nombre: "Pack de Cursos de JavaScript",
      imagen: "../images/javascript.png",
      enlace: "",
      precioOriginal: "$10.000,00",
      precioOferta: "$4.000,00",
    },
    {
      nombre: "Pack de curso Programacion en Python",
      imagen: "../images/python.png",
      enlace: "",
      precioOriginal: "$10.000,00",
      precioOferta: "$4.000,00",
    },
  ];

  let contenedorCursos = document.querySelector("#contenedor");
  let listaCarrito = document.querySelector("#lista-carrito");
  let totalCarrito = document.querySelector("#total-carrito");
  let carrito = [];

  // Función para confirmar y luego vaciar el carrito
  function confirmarVaciarCarrito() {
    if (carrito.length === 0) {
      // Si el carrito está vacío, simplemente vaciarlo sin mostrar la alerta
      vaciarCarrito();
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "¿Estás seguro?",
          text: "Esta acción vaciará tu carrito de cursos.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, vaciar carrito",
          cancelButtonText: "Cancelar",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            vaciarCarrito();
            swalWithBootstrapButtons.fire({
              title: "Carrito vaciado",
              text: "Tu carrito ha sido vaciado exitosamente.",
              icon: "success",
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Operación cancelada",
              text: "Tu carrito sigue intacto :)",
              icon: "info",
            });
          }
        });
    }
  }

  // Función para renderizar la lista de cursos
  function renderizarCursos() {
    contenedorCursos.innerHTML = "";
    cursos.forEach((curso) => {
      contenedorCursos.innerHTML += `
          <div class="curso-card">
            <a href="">
              <div class="bg-image">
                <img src="${curso.imagen}" alt="${curso.nombre}" />
                <div class="overlay-text">Ver contenido del curso</div>
              </div>
            </a>
            <div class="curso-info">
              <h3 class="product-name">${curso.nombre}</h3>
              <div class="price-info">
                <span class="original-price">${curso.precioOriginal}</span>
                <span class="discount-price">${curso.precioOferta}</span>
              </div>
              <div class="d-grid  col-8 mx-auto mt-3">
                <button class="btn-vaciar-carrito btn-agregar-carrito" data-nombre="${curso.nombre}" data-precio="${curso.precioOferta}">Agregar al carrito</button>
              </div>
            </div>
          </div>
        `;
    });

    // Agregar eventos a los botones de agregar al carrito
    let btnsAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");
    btnsAgregarCarrito.forEach((btn) => {
      btn.addEventListener("click", agregarAlCarrito);
    });
  }

  // Función para agregar un curso al carrito
  function agregarAlCarrito(event) {
    const nombre = event.target.dataset.nombre;
    const precio = parseFloat(
      event.target.dataset.precio.replace("$", "").replace(",", "")
    );

    const cursoEnCarrito = carrito.find((item) => item.nombre === nombre);

    if (cursoEnCarrito) {
      cursoEnCarrito.cantidad += 1;
    } else {
      carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      });
    }

    renderizarCarrito();
    actualizarTotal();
    guardarCarritoEnStorage();
  }

  // Función para renderizar el carrito
  function renderizarCarrito() {
    listaCarrito.innerHTML = "";
    carrito.forEach((item) => {
      listaCarrito.innerHTML += `
          <li>${item.nombre} | Cantidad: ${item.cantidad} | Precio: $${(
        item.precio * item.cantidad
      ).toFixed(3)}</li>
        `;
    });
  }

  // Función para actualizar el total del carrito
  function actualizarTotal() {
    const total = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    totalCarrito.textContent = `Total: $${total.toFixed(3)}`;
  }

  // Función para guardar el carrito en el almacenamiento local
  function guardarCarritoEnStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  // Función para cargar el carrito desde el almacenamiento local
  function cargarCarritoDesdeStorage() {
    const carritoStorage = localStorage.getItem("carrito");
    if (carritoStorage) {
      carrito = JSON.parse(carritoStorage);
      renderizarCarrito();
      actualizarTotal();
    }
  }

  // Función para vaciar el carrito
  function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    actualizarTotal();
    guardarCarritoEnStorage();
  }

  // Agregar evento al botón "Vaciar carrito"
  document
    .querySelector("#vaciar-carrito")
    .addEventListener("click", confirmarVaciarCarrito);

  // Cargar cursos y carrito al cargar la página
  renderizarCursos();
  cargarCarritoDesdeStorage();
});
