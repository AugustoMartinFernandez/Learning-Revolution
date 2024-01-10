/*
// Base de datos de cursos
const cursosDisponibles = {
  1: {
    nombre: "Programación Javascript",
    disponible: true,
    precio: 2500,
  },
  3: {
    nombre: "Desarrollo Web",
    disponible: true,
    precio: 5000,
  },
  4: {
    nombre: "Marketing Digital",
    disponible: true,
    precio: 2500,
  },
  2: {
    nombre: "Programación Python",
    disponible: true,
    precio: 2500,
  },
  5: {
    nombre: "Trading",
    disponible: true,
    precio: 2500,
  },
  6: {
    nombre: "Ciberseguridad",
    disponible: true,
    precio: 2500,
  },
  7: {
    nombre: "Hostinger",
    disponible: true,
    precio: 2500,
  },
};

// Obtener o inicializar el carrito desde el almacenamiento local
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para preguntar y validar el nombre del usuario
function pedirNombre() {
  let nombreUsuario = prompt("Hola, por favor ingresa tu nombre");
  while (!nombreUsuario) {
    nombreUsuario = prompt("Por favor, ingresa un nombre válido.");
  }
  return nombreUsuario;
}

// Función para mostrar los cursos y solicitar la selección del usuario
function seleccionarCurso() {
  let opciones = "";
  for (const key in cursosDisponibles) {
    const curso = cursosDisponibles[key];
    opciones += `${key}. ${curso.nombre} - Precio: $${curso.precio} ARS\n`;
  }

  let opcion = prompt(
    `Cursos disponibles:\n${opciones}\nElige un curso (indica el número):`
  );

  // Manejar el caso en el que se presiona "Cancelar"
  if (opcion === null) {
    alert(
      "Gracias por visitar el Simulador de Cursos de The Learning Revolution. ¡Hasta luego! 👋"
    );
    return null;
  }

  opcion = parseInt(opcion);

  while (
    isNaN(opcion) ||
    opcion < 1 ||
    opcion > Object.keys(cursosDisponibles).length
  ) {
    opcion = prompt("Por favor, selecciona una opción válida:");

    // Manejar el caso en el que se presiona "Cancelar"
    if (opcion === null) {
      break;
    }

    opcion = parseInt(opcion);
  }

  return opcion;
}

// Función para calcular el precio con descuento
function calcularPrecioConDescuento(precio, porcentajeDescuento) {
  return precio - (precio * porcentajeDescuento) / 100;
}

// Función para guardar el carrito en el almacenamiento local
function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función principal
function main() {
  const nombreUsuario = pedirNombre();
  alert(
    `Hola ${nombreUsuario}, bienvenido al Simulador de Cursos de The Learning Revolution`
  );

  // Informar al usuario sobre el descuento
  alert(
    "¡Aprovecha nuestro descuento especial! Si compras dos o más cursos, recibirás un descuento del 18% en el total de tu compra."
  );

  let deseaOtroCurso = true; // Inicializado en true para entrar en el bucle

  while (deseaOtroCurso) {
    const opcionCurso = seleccionarCurso();

    if (opcionCurso !== null) {
      const cursoElegido = cursosDisponibles[opcionCurso];

      if (cursoElegido) {
        if (cursoElegido.disponible) {
          carrito.push(cursoElegido);
          guardarCarrito();
          alert(
            `¡Excelente elección! Agregaste el curso de ${cursoElegido.nombre} a tu carrito.`
          );
        } else {
          alert(
            `Lo siento, el curso de ${cursoElegido.nombre} no está disponible en este momento.`
          );
        }
      } else {
        alert("Opción no válida. Por favor, vuelve a intentarlo.");
      }

      deseaOtroCurso = confirm("¿Quieres agregar otro curso al carrito?");
    } else {
      deseaOtroCurso = false; // Si se presionó "Cancelar", salir del bucle
    }
  }

  // Mostrar mensaje si no se compraron cursos
  if (carrito.length === 0) {
    alert("No has comprado ningún curso. ¡Esperamos verte pronto!");
    return;
  }

  // Calcular el descuento solo si se compraron 2 o más cursos
  if (carrito.length >= 2) {
    let descuentoTotal = 0;

    alert("Cursos comprados con descuento:");

    carrito.forEach((curso) => {
      const precioConDescuento = calcularPrecioConDescuento(curso.precio, 18);
      descuentoTotal += curso.precio - precioConDescuento;

      alert(
        `Curso: ${curso.nombre}\nPrecio original: $${curso.precio} ARS\nPrecio con descuento: $${precioConDescuento} ARS\n`
      );
    });

    const montoTotal =
      carrito.reduce((total, curso) => total + curso.precio, 0) - descuentoTotal;
    alert(`Descuento total aplicado: $${descuentoTotal} ARS`);
    alert(`Monto total a pagar: $${montoTotal} ARS`);
  } else {
    // Mostrar el curso sin descuento si se compró solo uno
    alert("Cursos comprados:");

    carrito.forEach((curso) => {
      alert(`Curso: ${curso.nombre}\nPrecio original: $${curso.precio} ARS\n`);
    });

    const montoTotal = carrito[0].precio;
    alert(`Monto total a pagar: $${montoTotal} ARS`);
  }

  // Limpiar el carrito después de completar la compra
  carrito = [];
  guardarCarrito();

  alert(
    `Gracias ${nombreUsuario} por usar el Simulador de Cursos de The Learning Revolution. ¡Hasta luego! 👋`
  );
}

// Ejecutar la función principal cuando se carga la página
main();*/

// let cursos = [
//   {
//     nombre: "Pack de Cursos de trading",
//     imagen: "../images/Cursotrading.png",
//     enlace: "",
//     precioOriginal: "$7.000,00",
//     precioOferta: "$2.000,00"
//   },
//   {
//     nombre: "Pack de Cursos de Desarrollo Web",
//     imagen: "../images/Desarrolloweb.png",
//     enlace: "",
//     precioOriginal: "$9.000,00",
//     precioOferta: "$4.500,00"
//   },
//   {
//     nombre: "Pack de Cursos de Hostinger",
//     imagen: "../images/hostinger.png",
//     enlace: "",
//     precioOriginal: "$5.000,00",
//     precioOferta: "$2.000,00"
//   },
//   {
//     nombre: "Pack de Cursos de JavaScript",
//     imagen: "../images/javascript.png",
//     enlace: "",
//     precioOriginal: "$10.000,00",
//     precioOferta: "$6.000,00"
//   }
// ];

//   let contenedorCursos = document.querySelector('#contenedor')

// cursos.forEach( (curso) => {
//   contenedorCursos.innerHTML += `
//   <div class="curso-card">
//   <a href="">
//     <div class="bg-image">
//       <img src="${curso.imagen}" alt="Pack de Cursos de Edición de Video" />
//       <div class="overlay-text">Ver contenido del curso</div>
//     </div>
//   </a>
//   <div class="curso-info">
//     <h3 class="product-name">${curso.nombre}</h3>
//     <div class="price-info">
//       <span class="original-price">${curso.precioOriginal}</span>
//       <span class="discount-price">${curso.precioOferta}</span>
//     </div>
//   </div>
// </div>
//   `
// })

// document.addEventListener("DOMContentLoaded", function () {
//   let cursos = [
//     {
//       nombre: "Pack de Cursos de trading",
//       imagen: "../images/Cursotrading.png",
//       enlace: "",
//       precioOriginal: "$7.000,00",
//       precioOferta: "$2.000,00",
//     },
//     {
//       nombre: "Pack de Cursos de Desarrollo Web",
//       imagen: "../images/Desarrolloweb.png",
//       enlace: "",
//       precioOriginal: "$9.000,00",
//       precioOferta: "$4.500,00",
//     },
//     {
//       nombre: "Pack de Cursos de Hostinger",
//       imagen: "../images/hostinger.png",
//       enlace: "",
//       precioOriginal: "$5.000,00",
//       precioOferta: "$2.000,00",
//     },
//     {
//       nombre: "Pack de Cursos de JavaScript",
//       imagen: "../images/javascript.png",
//       enlace: "",
//       precioOriginal: "$10.000,00",
//       precioOferta: "$6.000,00",
//     },
//   ];

//   let contenedorCursos = document.querySelector("#contenedor");
//   let listaCarrito = document.querySelector("#lista-carrito");
//   let totalCarrito = document.querySelector("#total-carrito");
//   let carrito = [];

//   // Función para renderizar la lista de cursos
//   function renderizarCursos() {
//     contenedorCursos.innerHTML = "";
//     cursos.forEach((curso) => {
//       contenedorCursos.innerHTML += `
//         <div class="curso-card">
//           <a href="">
//             <div class="bg-image">
//               <img src="${curso.imagen}" alt="${curso.nombre}" />
//               <div class="overlay-text">Ver contenido del curso</div>
//             </div>
//           </a>
//           <div class="curso-info">
//             <h3 class="product-name">${curso.nombre}</h3>
//             <div class="price-info">
//               <span class="original-price">${curso.precioOriginal}</span>
//               <span class="discount-price">${curso.precioOferta}</span>
//             </div>
//             <div class="d-grid gap-2 col-10 mx-auto">
//             <button class="btn btn-primary btn-agregar-carrito" data-nombre="${curso.nombre}" data-precio="${curso.precioOferta}">Agregar al carrito</button>
// </div>
//           </div>
//         </div>
//       `;
//     });

//     // Agregar eventos a los botones de agregar al carrito
//     let btnsAgregarCarrito = document.querySelectorAll(".btn-agregar-carrito");
//     btnsAgregarCarrito.forEach((btn) => {
//       btn.addEventListener("click", agregarAlCarrito);
//     });
//   }

//   // Función para agregar un curso al carrito
//   function agregarAlCarrito(event) {
//     const nombre = event.target.dataset.nombre;
//     const precio = parseFloat(
//       event.target.dataset.precio.replace("$", "").replace(",", "")
//     );

//     const cursoEnCarrito = carrito.find((item) => item.nombre === nombre);

//     if (cursoEnCarrito) {
//       cursoEnCarrito.cantidad += 1;
//     } else {
//       carrito.push({
//         nombre: nombre,
//         precio: precio,
//         cantidad: 1,
//       });
//     }

//     renderizarCarrito();
//     actualizarTotal();
//     guardarCarritoEnStorage();
//   }

//   // Función para renderizar el carrito
//   function renderizarCarrito() {
//     listaCarrito.innerHTML = "";
//     carrito.forEach((item) => {
//       listaCarrito.innerHTML += `
//         <li>${item.nombre} - Cantidad: ${item.cantidad} - Precio: $${(
//         item.precio * item.cantidad
//       ).toFixed(2)}</li>
//       `;
//     });
//   }

//   // Función para actualizar el total del carrito
//   function actualizarTotal() {
//     const total = carrito.reduce(
//       (acc, item) => acc + item.precio * item.cantidad,
//       0
//     );
//     totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
//   }

//   // Función para guardar el carrito en el almacenamiento local
//   function guardarCarritoEnStorage() {
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   }

//   // Función para cargar el carrito desde el almacenamiento local
//   function cargarCarritoDesdeStorage() {
//     const carritoStorage = localStorage.getItem("carrito");
//     if (carritoStorage) {
//       carrito = JSON.parse(carritoStorage);
//       renderizarCarrito();
//       actualizarTotal();
//     }
//   }

//   // Cargar cursos y carrito al cargar la página
//   renderizarCursos();
//   cargarCarritoDesdeStorage();
// });

document.addEventListener("DOMContentLoaded", function () {
  let cursos = [{
    nombre: "Pack de Cursos de trading",
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
    precioOferta: "$4.500,00",
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
    precioOferta: "$6.000,00",
  },
  ];

  let contenedorCursos = document.querySelector("#contenedor");
  let listaCarrito = document.querySelector("#lista-carrito");
  let totalCarrito = document.querySelector("#total-carrito");
  let carrito = [];

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
  document.querySelector("#vaciar-carrito").addEventListener("click", vaciarCarrito);

  // Cargar cursos y carrito al cargar la página
  renderizarCursos();
  cargarCarritoDesdeStorage();
});