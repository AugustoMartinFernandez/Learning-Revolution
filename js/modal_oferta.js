document.addEventListener("DOMContentLoaded", function () {

  // Establece la fecha límite de la oferta para 7 días a partir de hoy
  const fechaLimiteOferta = new Date();
  fechaLimiteOferta.setDate(fechaLimiteOferta.getDate() + 7);
  fechaLimiteOferta.setHours(23, 59, 59, 999);

  // Función para actualizar el temporizador que muestra el tiempo restante
  function actualizarTemporizador() {
    // Obtiene la hora actual
    const ahora = new Date().getTime();
    // Calcula el tiempo restante hasta la fecha límite de la oferta
    const tiempoRestante = fechaLimiteOferta - ahora;

    // Calcula los días, horas, minutos y segundos a partir del tiempo restante
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
      (tiempoRestante % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Actualiza los elementos HTML con los valores calculados, asegurándote de agregar un cero inicial si es necesario
    document.getElementById("dias").innerHTML = formatTimeUnit(dias);
    document.getElementById("horas").innerHTML = formatTimeUnit(horas);
    document.getElementById("minutos").innerHTML = formatTimeUnit(minutos);
    document.getElementById("segundos").innerHTML = formatTimeUnit(segundos);

    // Cierra el modal si el tiempo restante llega a cero
    if (tiempoRestante <= 0) {
      cerrarModal();
    }
  }

  // Restablece el temporizador después de 1 segundo para asegurar que el cálculo se haga correctamente
  setTimeout(function() {
    // Llama a la función abrirModal para iniciar el proceso
    abrirModal();
  
    // Actualiza el temporizador inmediatamente después de abrir el modal
    actualizarTemporizador();
  
    // Actualiza el temporizador cada segundo
    setInterval(actualizarTemporizador, 1000);
  }, 1000);

  // Función para abrir el modal de oferta
  function abrirModal() {
    // Añade la clase 'is-active' al modal para mostrarlo
    document.getElementById("ofertaModal").classList.add("is-active");
  }

  // Función para cerrar el modal de oferta
  function cerrarModal() {
    // Remueve la clase 'is-active' para ocultar el modal
    document.getElementById("ofertaModal").classList.remove("is-active");
  }

  // Agrega un evento de clic al modal para cerrarlo
  document.getElementById("ofertaModal").addEventListener("click", function (event) {
    // Si el clic ocurre dentro del contenido del modal, no lo cerramos
    if (!event.target.closest('.modal-content')) return;
    cerrarModal();
  });

  // Agrega un evento de clic al botón de cerrar modal para llamar a la función cerrarModal
  document.getElementById("closeModal").addEventListener("click", cerrarModal);

  // Función para formatear las unidades de tiempo (asegurándose de agregar un cero inicial si es necesario)
  function formatTimeUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
  }
});
