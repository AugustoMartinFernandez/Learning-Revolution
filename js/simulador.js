// SIMULADOR DE CURSOS
// Base de datos de cursos
const cursosDisponibles = {
  1: { nombre: "Programación", disponible: true, precio: "$1500 ARS" },
  2: { nombre: "Diseño Web", disponible: true, precio: "$2500 ARS" },
  // Agrega más cursos según sea necesario
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
  let opcion = prompt(
    "Elige un curso:\n1. Programación\n2. Diseño Web\n"
  ).toLowerCase();
  opcion = parseInt(opcion);

  while (isNaN(opcion) || opcion < 1 || opcion > 2) {
    opcion = prompt(
      "Por favor, selecciona una opción válida:\n1. Programación\n2. Diseño Web\n"
    ).toLowerCase();
    opcion = parseInt(opcion);
  }

  return opcion;
}

// Función principal
function main() {
  const nombreUsuario = pedirNombre();
  alert(
    `Hola ${nombreUsuario}, bienvenido al Simulador de Cursos de The Learning Revolution.`
  );

  let deseaOtroCurso;

  do {
    const opcionCurso = seleccionarCurso();
    const cursoElegido = cursosDisponibles[opcionCurso];

    if (cursoElegido) {
      if (cursoElegido.disponible) {
        alert(
          `El curso de ${cursoElegido.nombre} está disponible.\nPrecio: ${cursoElegido.precio}`
        );
      } else {
        alert(
          `Lo siento, el curso de ${cursoElegido.nombre} no está disponible en este momento.`
        );
      }
    } else {
      alert("Opción no válida. Por favor, vuelve a intentarlo.");
    }

    deseaOtroCurso = confirm("¿Quieres elegir otro curso?");
  } while (deseaOtroCurso);

  alert(
    `Gracias ${nombreUsuario} por usar el Simulador de Cursos de The Learning Revolution. ¡Hasta luego! 👋`
  );
}

// Ejecutar la función principal cuando se carga la página
main();
