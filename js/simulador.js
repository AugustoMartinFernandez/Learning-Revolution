// Variables
const cursosDisponibles = [
  "programacion",
  "diseno web",
  "marketing digital",
  "ciberseguridad",
  "desarrollo web",
  "javascript",
  "biologo",
];
const precios = {
  "programacion": 1000,
  "diseño web": 1500,
  "marketing digital": 2000,
  "ciberseguridad": 3000,
  "javascript": 3800,
};

// Función principal
function main() {
  // solicito el nombre al usuario
  const nombre = prompt("Ingresa tu nombre: ");

  // Obtengo el curso que el usuario está buscando
  const curso = prompt("Ingresa el curso que estás buscando: ").toLowerCase();

  // Verifico la disponibilidad del curso
  const disponible = cursosDisponibles.includes(curso);

  // Muestro el mensaje al usuario
  if (disponible) {
    alert(
      "Hola " +
        nombre +
        ", como estas? te comento que afortunadamente el curso de " +
        curso +
        " está disponible!"
    );

    // Pregunto si el usuario quiere conocer el precio
    const quierePrecio = prompt(
      "¿Quieres conocer el precio del curso? (Si/No)"
    ).toLowerCase();

    // Si el usuario quiere conocer el precio, mostramos el precio
    if (quierePrecio === "Si".toLowerCase()) {
      // Obtengo el precio del curso
      const precio = precios[curso];

      // Verifico si el precio existe antes de mostrarlo
      if (precio !== undefined) {
        alert("El precio del curso de " + curso + " cuesta " + precio + " ARS");
      } else {
        alert(
          "Lo siento " +
            nombre +
            " lamentablemente por ahora no se encuentra disponible el precio para el curso de " +
            curso
        );
      }
    }
  } else {
    alert(
      "Hola " +
        nombre +
        ", lamentablemente aun no se encuentra disponible el curso de " +
        curso +
        "!"
    );
  }
}
// Llamo a la función principal
main();
