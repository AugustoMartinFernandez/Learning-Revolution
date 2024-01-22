document.addEventListener('DOMContentLoaded', function () {
    const fechaLimiteOferta = new Date(2024, 1, 2, 23, 59, 59);

    function actualizarTemporizador() {
      const ahora = new Date().getTime();
      const tiempoRestante = fechaLimiteOferta - ahora;

      const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

      document.getElementById('dias').innerHTML = dias;
      document.getElementById('horas').innerHTML = horas;
      document.getElementById('minutos').innerHTML = minutos;
      document.getElementById('segundos').innerHTML = segundos;

      if (tiempoRestante <= 0) {
        cerrarModal();
      }
    }

    function abrirModal() {
      document.getElementById('ofertaModal').classList.add('is-active');
      setInterval(actualizarTemporizador, 1000);
      // Cerrar el modal automáticamente después de 5 segundos
      setTimeout(cerrarModal, 4000);
    }

    function cerrarModal() {
      document.getElementById('ofertaModal').classList.remove('is-active');
    }

    abrirModal();

    document.getElementById('closeModal').addEventListener('click', cerrarModal);
  });