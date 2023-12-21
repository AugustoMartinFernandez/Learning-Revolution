// Establece la fecha límite para tu oferta especial (año, mes (0-11), día, hora, minuto, segundo)
const fechaLimiteOferta = new Date(2023, 11, 31, 23, 59, 59); // 31 de diciembre de 2023, 23:59:59

function actualizarContador() {
  const ahora = new Date().getTime();
  const tiempoRestante = fechaLimiteOferta - ahora;

  if (tiempoRestante > 0) {
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById('cuenta-regresiva').innerHTML =
      dias + 'd ' + horas + 'h ' + minutos + 'm ' + segundos + 's';

    setTimeout(actualizarContador, 1000); // Actualizar cada segundo
  } else {
    document.getElementById('cuenta-regresiva').innerHTML = 'Oferta Finalizada';
  }
}
// Llama a la función para iniciar el contador al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  actualizarContador();
});
