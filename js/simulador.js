// SIMULADOR DE CURSOS
// Base de datos de cursos
const cursosDisponibles = {
  1: { nombre: "Programación Javascript", disponible: true, precio: 2500 },
  2: { nombre: "Programación Python", disponible: true, precio: 2500 },
  3: { nombre: "Desarrollo Web", disponible: true, precio: 5000 },
  4: { nombre: "Marketing Digital", disponible: true, precio: 2500 },
  5: { nombre: "Trading", disponible: true, precio: 2500 },
  6: { nombre: "Ciberseguridad", disponible: true, precio: 2500 },
  7: { nombre: "Hostinger", disponible: true, precio: 2500 },
};

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

// Función principal
function main() {
  const nombreUsuario = pedirNombre();
  alert(
    `Hola ${nombreUsuario}, bienvenido al Simulador de Cursos de The Learning Revolution.`
  );

  // Informar al usuario sobre el descuento
  alert(
    "¡Aprovecha nuestro descuento especial! Si compras dos o más cursos, recibirás un descuento del 18% en el total de tu compra."
  );

  let cursosElegidos = [];
  let deseaOtroCurso = true; // Inicializado en true para entrar en el bucle

  while (deseaOtroCurso) {
    const opcionCurso = seleccionarCurso();

    if (opcionCurso !== null) {
      const cursoElegido = cursosDisponibles[opcionCurso];

      if (cursoElegido) {
        if (cursoElegido.disponible) {
          cursosElegidos.push(cursoElegido);
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
  if (cursosElegidos.length === 0) {
    alert("No has comprado ningún curso. ¡Esperamos verte pronto!");
    return;
  }

  // Calcular el descuento solo si se compraron 2 o más cursos
  let descuentoTotal = 0;
  if (cursosElegidos.length >= 2) {
    alert("Cursos comprados con descuento:");

    cursosElegidos.forEach((curso) => {
      const precioConDescuento = calcularPrecioConDescuento(curso.precio, 18);
      descuentoTotal += curso.precio - precioConDescuento;

      alert(
        `Curso: ${curso.nombre}\nPrecio original: $${curso.precio} ARS\nPrecio con descuento: $${precioConDescuento} ARS\n`
      );
    });

    alert(`Descuento total aplicado: $${descuentoTotal} ARS`);
  } else {
    // Mostrar los cursos sin descuento si se compró solo uno
    alert("Cursos comprados:");

    cursosElegidos.forEach((curso) => {
      alert(`Curso: ${curso.nombre}\nPrecio original: $${curso.precio} ARS\n`);
    });
  }

  alert(
    `Gracias ${nombreUsuario} por usar el Simulador de Cursos de The Learning Revolution. ¡Hasta luego! 👋`
  );
}

// Ejecutar la función principal cuando se carga la página
main();
