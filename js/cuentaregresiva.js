document.addEventListener("DOMContentLoaded", function () {
  // Establecer la fecha límite de la oferta para 10 días a partir de hoy
  const fechaLimiteOferta = new Date();
  fechaLimiteOferta.setDate(fechaLimiteOferta.getDate() + 10); // Cambio de 7 a 10 días
  fechaLimiteOferta.setHours(23, 59, 59, 999);

  // Función para actualizar el contador de tiempo restante
  function actualizarContador() {
    // Obtener el tiempo actual en milisegundos
    const ahora = new Date().getTime();
    // Calcular el tiempo restante hasta la fecha límite de la oferta
    const tiempoRestante = fechaLimiteOferta - ahora;

    // Verificar si el tiempo restante es mayor que cero (oferta aún no finalizada)
    if (tiempoRestante > 0) {
      // Calcular días, horas, minutos y segundos
      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor(
        (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutos = Math.floor(
        (tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)
      );
      const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

      // Actualizar elementos en el DOM con los nuevos valores
      document.getElementById("dias").innerText = formatTimeUnit(dias);
      document.getElementById("horas").innerText = formatTimeUnit(horas);
      document.getElementById("minutos").innerText = formatTimeUnit(minutos);
      document.getElementById("segundos").innerText = formatTimeUnit(segundos);

      // Actualizar el contador cada segundo
      setTimeout(actualizarContador, 1000);
    } else {
      // Si la oferta ha finalizado, mostrar un mensaje indicando que la oferta ha finalizado
      document.querySelector(".contador").innerHTML =
        '<div class="oferta-finalizada">Oferta Finalizada</div>';
    }
  }

  // Función para formatear las unidades de tiempo (asegurándose de agregar un cero inicial si es necesario)
  function formatTimeUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
  }

  // Iniciar la actualización del contador cuando el DOM esté completamente cargado
  actualizarContador();
});
