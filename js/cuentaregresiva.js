const fechaLimiteOferta = new Date(2023, 11, 31, 23, 59, 59);

function actualizarContador() {
  const ahora = new Date().getTime();
  const tiempoRestante = fechaLimiteOferta - ahora;

  if (tiempoRestante > 0) {
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById('dias').innerText = formatTimeUnit(dias);
    document.getElementById('horas').innerText = formatTimeUnit(horas);
    document.getElementById('minutos').innerText = formatTimeUnit(minutos);
    document.getElementById('segundos').innerText = formatTimeUnit(segundos);

    setTimeout(actualizarContador, 1000);
  } else {
    document.querySelector('.contador').innerHTML = '<div class="oferta-finalizada">Oferta Finalizada</div>';
  }
}

function formatTimeUnit(unit) {
  return unit < 10 ? `0${unit}` : unit;
}

document.addEventListener('DOMContentLoaded', () => {
  actualizarContador();
});
