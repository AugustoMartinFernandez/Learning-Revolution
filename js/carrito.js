// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Array de objetos que contiene la información de diferentes cursos
  let cursos = [
    {
      nombre: "Cursos completo de Trading desde 0",
      imagen: "../images/Cursotrading.png",
      precioOriginal: "$9.000,00",
      precioOferta: "$4.000,00",
      contenido: `
        <h2>Trading desde 0 - Curso Completo</h2>
        <p>Este curso te enseñará los fundamentos del trading, desde análisis técnico hasta estrategias avanzadas de gestión de riesgos.</p>
        <ul>
          <li><strong>⇒</strong> Introducción al mercado financiero</li>
          <li><strong>⇒</strong> Análisis técnico y fundamental</li>
          <li><strong>⇒</strong> Estrategias de trading efectivas</li>
          <li><strong>⇒</strong> Gestión de riesgos y psicología del trader</li>
        </ul>
      `,
    },
    {
      nombre: "Curso completo de Desarrollo Web",
      imagen: "../images/Desarrolloweb.png",
      precioOriginal: "$15.000,00",
      precioOferta: "$5.500,00",
      contenido: `
        <h2>Desarrollo Web</h2>
        <p>Conviértete en un desarrollador web profesional con este curso completo + paquete de cursos.</p>
        <ul>
          <li><strong>✓</strong> HTML y CSS desde cero</li>
          <li><strong>✓</strong> Git + Github</li>
          <li><strong>✓</strong> Sass</li>
          <li><strong>✓</strong> Frameworks CSS + Bootstrap</li>
          <li><strong>✓</strong> Animaciones</li>
          <li><strong>✓</strong> SEO y buenas prácticas</li>
          <li><strong>✓</strong> Servidores: tu sitio en línea</li>
          <li><strong>✓</strong> Conociendo a nuestro cliente</li>
        </ul>
      `,
    },
    {
      nombre: "Curso completo de Hostinger",
      imagen: "../images/hostinger.png",
      precioOriginal: "$8.000,00",
      precioOferta: "$4.500,00",
      contenido: `
        <h2>Cursos de Hosting</h2>
        <p>Aprende a administrar servidores y a utilizar servicios de hosting con los cursos especializados de Hostinger.</p>
        <ul>
          <li><strong>✓</strong> Configuración de servidores Linux</li>
          <li><strong>✓</strong> Uso eficiente de servicios de hosting</li>
          <li><strong>✓</strong> Seguridad en servidores y sitios web</li>
          <li><strong>✓</strong> Optimización de rendimiento</li>
        </ul>
      `,
    },
    {
      nombre: " Curso de Programacion en JavaScript",
      imagen: "../images/javascript.png",
      precioOriginal: "$15.000,00",
      precioOferta: "$5.000,00",
      contenido: `
        <h2>JavaScript </h2>
        <p>Este paquete de cursos te llevará desde los conceptos básicos de JavaScript hasta las últimas tendencias.</p>
        <ul>
          <li><strong>✓</strong> Introducción a JavaScript</li>
          <li><strong>✓</strong> Conceptos generales: Sintaxis y variables</li>
          <li><strong>✓</strong> Control de flujos</li>
          <li><strong>✓</strong> Ciclos e iteraciones</li>
          <li><strong>✓</strong> Funciones</li>
          <li><strong>✓</strong> Objetos</li>
          <li><strong>✓</strong> Arrays</li>
          <li><strong>✓</strong> Funciones de orden superior</li>
          <li><strong>✓</strong> DOM</li>
          <li><strong>✓</strong> Eventos</li>
          <li><strong>✓</strong> Storage & JSON</li>
          <li><strong>✓</strong> Operadores avanzados I</li>
          <li><strong>✓</strong> Operadores Avanzados II + Workshop</li>
          <li><strong>✓</strong> Librerías</li>
          <li><strong>✓</strong> Asincronía y promesas</li>
          <li><strong>✓</strong> Ajax & Fetch</li>
          <li><strong>✓</strong> Frameworks & NodeJS</li>
        </ul>
      `,
    },
    {
      nombre: " Curso de Programacion en Python",
      imagen: "../images/python.png",
      precioOriginal: "$18.000,00",
      precioOferta: "$5.600,00",
      contenido: `
        <h2>Programación en Python Curso Avanzado</h2>
        <p>Explora las capacidades de Python para desarrollo web, análisis de datos, inteligencia artificial y más con este completo paquete de cursos.</p>
        <ul>
          <li><strong>⇒</strong> Desarrollo web con Django y Flask</li>
          <li><strong>⇒</strong> Análisis de datos con Pandas y NumPy</li>
          <li><strong>⇒</strong> Introducción a la inteligencia artificial con Python</li>
          <li><strong>⇒</strong> Automatización y scripting</li>
        </ul>
      `,
    },
    {
      nombre: " Curso de Marketing Digital",
      imagen: "../images/MarketingDigital.png",
      precioOriginal: "$7.000,00",
      precioOferta: "$5.500,00",
      contenido: `
      <h2>Marketing Digital</h2>
      <p>Descubre las estrategias más efectivas en marketing digital y maximiza el potencial de tu negocio en línea con este completo paquete de cursos.</p>
      <ul>
        <li><strong>⇒</strong> Optimización de motores de búsqueda (SEO) para aumentar la visibilidad en línea</li>
        <li><strong>⇒</strong> Publicidad en redes sociales para llegar a tu audiencia objetivo de manera efectiva</li>
        <li><strong>⇒</strong> Email marketing: estrategias para construir relaciones sólidas con tus suscriptores</li>
        <li><strong>⇒</strong> Analítica web: utiliza datos para tomar decisiones informadas y mejorar el rendimiento de tu sitio</li>
      </ul>
      `,
    },
    {
      nombre: " Curso de Ciberseguridad Completo",
      imagen: "../images/2.png",
      precioOriginal: "$10.000,00",
      precioOferta: "$3.800,00",
      contenido: `
      <h2>Ciberseguridad</h2>
      <p>Sumérgete en el fascinante mundo de la ciberseguridad y aprende las técnicas más avanzadas para proteger tus sistemas y datos contra amenazas cibernéticas.</p>
      <ul>
        <li><strong>⇒</strong> Ethical Hacking: descubre cómo piensan los hackers y cómo puedes defender tus sistemas</li>
        <li><strong>⇒</strong> Protección de datos: técnicas para asegurar la confidencialidad e integridad de la información</li>
        <li><strong>⇒</strong> Análisis de vulnerabilidades: identifica y mitiga posibles puntos de acceso para evitar ataques</li>
        <li><strong>⇒</strong> Gestión de incidentes de seguridad: cómo responder eficazmente a brechas de seguridad y ataques cibernéticos</li>
      </ul>
      
      `,
    },
  ];

  // Elementos del DOM
  let contenedorCursos = document.querySelector("#contenedor");
  let listaCarrito = document.querySelector("#lista-carrito");
  let totalCarrito = document.querySelector("#total-carrito");
  let carrito = [];

  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // Función para mostrar un mensaje de bienvenida al agregar un curso al carrito
  function mostrarMensajeBienvenida(curso) {
    Toastify({
      text: `¡"${curso.nombre}" agregado al carrito!`,
      duration: 1750,
      close: false,
      gravity: "top-left",
    }).showToast();
  }

  // Función para agregar un curso al carrito
  function agregarAlCarrito(event) {
    // Obtiene el nombre y precio del curso desde los atributos del botón
    const nombre = event.target.dataset.nombre;
    const precio = parseFloat(
      event.target.dataset.precio.replace("$", "").replace(",", "")
    );
    // Busca el curso en el carrito
    const cursoEnCarrito = carrito.find((item) => item.nombre === nombre);
    // Actualiza la cantidad si el curso ya está en el carrito, de lo contrario, lo agrega
    if (cursoEnCarrito) {
      cursoEnCarrito.cantidad += 1;
    } else {
      carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: 1,
      });
    }

    mostrarMensajeBienvenida(cursos.find((curso) => curso.nombre === nombre));
    renderizarCarrito();
    actualizarTotal();
    guardarCarritoEnStorage();
  }

  // Función para renderizar la lista de cursos en el DOM
  function renderizarCursos() {
    // Limpia el contenedor de cursos
    contenedorCursos.innerHTML = "";
    // Recorre el array de cursos y crea elementos HTML para cada uno
    cursos.forEach((curso) => {
      // Crea un div para representar cada curso
      const cursoCard = document.createElement("div");
      cursoCard.classList.add("col-md-4", "mb-4", "curso-card");
      // Crea un div con información sobre el curso
      const cursoInfo = document.createElement("div");
      cursoInfo.classList.add("curso-info");
      cursoInfo.innerHTML = `
        <div class="bg-image">
          <img src="${curso.imagen}">
        </div>
        <h3 class="product-name">${curso.nombre}</h3>
        <div class="price-info">
          <span class="original-price">${curso.precioOriginal}</span>
          <span class="discount-price">${curso.precioOferta}</span>
        </div>
        <div class="d-grid col-8 mx-auto mt-3">
          <button class="btn-ver-contenido btn-vaciar-carrito mb-2" data-curso="${curso.nombre}">Ver Contenido</button>
          <button class="btn-vaciar-carrito btn-agregar-carrito" data-nombre="${curso.nombre}" data-precio="${curso.precioOferta}">Agregar al carrito</button>
        </div>
      `;

      const btnVerContenido = cursoInfo.querySelector(".btn-ver-contenido");
      btnVerContenido.addEventListener("click", function (event) {
        event.preventDefault();
        const nombre = btnVerContenido.dataset.curso;
        const cursoSeleccionado = cursos.find(
          (curso) => curso.nombre === nombre
        );
        mostrarModal(generarContenidoModal(cursoSeleccionado));
      });

      const btnAgregarCarrito = cursoInfo.querySelector(".btn-agregar-carrito");
      btnAgregarCarrito.addEventListener("click", function (event) {
        event.preventDefault();
        agregarAlCarrito(event);
      });
      // Agrega los elementos creados al contenedor de cursos
      cursoCard.appendChild(cursoInfo);
      contenedorCursos.appendChild(cursoCard);
    });
  }
  // Función para renderizar la lista de cursos en el carrito
  function renderizarCarrito() {
    // Limpia la lista de cursos en el carrito
    listaCarrito.innerHTML = "";
    // Recorre el array de cursos en el carrito y crea elementos HTML para cada uno
    carrito.forEach((item, index) => {
      // Crea un elemento de lista para representar cada curso en el carrito
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        ${item.nombre} | Cantidad: ${item.cantidad} | Precio: $${(
        item.precio * item.cantidad
      ).toFixed()}
      <button class="btn-eliminar-curso btn  btn-sm ms-2" data-index="${index}">
      <img width="24" height="24" src="https://img.icons8.com/glyph-neue/64/FA5252/delete--v1.png" alt="delete--v1"/>
      </button>
      `;
      listaCarrito.appendChild(listItem);
    });

    document.querySelectorAll(".btn-eliminar-curso").forEach((btn) => {
      btn.addEventListener("click", function () {
        const index = parseInt(btn.dataset.index);
        eliminarCursoDelCarrito(index);
      });
    });
  }

  document
    .querySelector("#vaciar-carrito")
    .addEventListener("click", confirmarVaciarCarrito);

  closeModalBtn.addEventListener("click", function () {
    cerrarModal();
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      cerrarModal();
    }
  });

  function eliminarCursoDelCarrito(index) {
    // Verificar si hay más de un elemento del mismo curso en el carrito
    if (carrito[index].cantidad > 1) {
      // Si hay más de uno, simplemente reducir la cantidad
      carrito[index].cantidad -= 1;
    } else {
      // Si solo hay uno, eliminar el curso del carrito
      carrito.splice(index, 1);
    }

    renderizarCarrito();
    actualizarTotal();
    guardarCarritoEnStorage();
  }

  // Función para actualizar el total del carrito
  function actualizarTotal() {
    const total = carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    totalCarrito.textContent = `Total: ${formatoMoneda(total)}`;
  }
  // Función para dar formato al número como moneda argentina (ARS)
  function formatoMoneda(monto) {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 3,
    }).format(monto);
  }

  // Función para guardar el carrito en el almacenamiento local
  function guardarCarritoEnStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }

  // Función para cargar el carrito desde el almacenamiento local al cargar la página
  function cargarCarritoDesdeStorage() {
    const carritoStorage = localStorage.getItem("carrito");
    if (carritoStorage) {
      carrito = JSON.parse(carritoStorage);
      renderizarCarrito();
      actualizarTotal();
    }
  }

  function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
    actualizarTotal();
    guardarCarritoEnStorage();
  }

  // Función para vaciar el carrito con confirmación
  function confirmarVaciarCarrito() {
    if (carrito.length === 0) {
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

  // Agrega un evento de clic al botón "Finalizar Compra"
  document
    .querySelector("#finalizar-compra")
    .addEventListener("click", function () {
      // Verifica si el carrito contiene elementos
      if (carrito.length > 0) {
        // Si hay elementos en el carrito, muestra el SweetAlert para finalizar la compra
        finalizarCompra();
      } else {
        // Si el carrito está vacío, muestra un mensaje al usuario
        Swal.fire({
          title: "Carrito vacío",
          text: "Agrega cursos a tu carrito antes de finalizar la compra.",
          icon: "info",
        });
      }
    });

  // Función para finalizar la compra
  function finalizarCompra() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Finalizar compra?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // Lógica para finalizar la compra

          // Limpiar el carrito después de la compra
          vaciarCarrito();

          swalWithBootstrapButtons.fire({
            title: "Compra exitosa",
            text: "¡Gracias por tu compra!",
            icon: "success",
          });
        }
      });
  }

  // Agrega un evento de clic al botón de vaciar carrito para confirmar la acción
  document
    .querySelector("#vaciar-carrito")
    .addEventListener("click", confirmarVaciarCarrito);
  // Agrega eventos de clic para cerrar el modal
  closeModalBtn.addEventListener("click", function () {
    cerrarModal();
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      cerrarModal();
    }
  });

  // Función para mostrar el modal con un contenido específico
  function mostrarModal(contenido) {
    modalContent.innerHTML = contenido;
    modal.style.display = "block";
  }

  // Función para cerrar el modal
  function cerrarModal() {
    modal.style.display = "none";
  }

  // Función para generar el contenido del modal basado en la información del curso
  function generarContenidoModal(curso) {
    return `<ul>
      <li><strong>Contenido:</strong>${curso.contenido}</li>
    </ul>
  `;
  }

  // Renderiza la lista de cursos, carga el carrito desde el almacenamiento local
  renderizarCursos();
  cargarCarritoDesdeStorage();
});
