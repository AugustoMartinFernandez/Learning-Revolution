// Espera a que el documento HTML esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Establece la fecha límite de la oferta al 2 de enero de 2024 a las 23:59:59
  const fechaLimiteOferta = new Date(2024, 1, 2, 23, 59, 59);

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

    // Actualiza los elementos HTML con los valores calculados
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    // Cierra el modal si el tiempo restante llega a cero
    if (tiempoRestante <= 0) {
      cerrarModal();
    }
  }

  // Función para abrir el modal de oferta
  function abrirModal() {
    // Añade la clase 'is-active' al modal para mostrarlo
    document.getElementById("ofertaModal").classList.add("is-active");
    // Establece un intervalo para llamar a la función actualizarTemporizador cada segundo
    setInterval(actualizarTemporizador, 1000);
    // Cierra automáticamente el modal después de 4 segundos
    setTimeout(cerrarModal, 4000);
  }

  // Función para cerrar el modal de oferta
  function cerrarModal() {
    // Remueve la clase 'is-active' para ocultar el modal
    document.getElementById("ofertaModal").classList.remove("is-active");
  }

  // Llama a la función abrirModal para iniciar el proceso
  abrirModal();

  // Agrega un evento de clic al botón de cerrar modal para llamar a la función cerrarModal
  document.getElementById("closeModal").addEventListener("click", cerrarModal);
});
