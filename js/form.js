const btn = document.getElementById('button');
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  btn.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_cp3ip6i';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Formulario';
      
      // Restablecer el formulario después de enviar con éxito
      form.reset();

      // Muestra la notificación de éxito con Toastify
      Toastify({
        text: 'Formulario enviado exitosamente!',
        duration: 4000, // Duración en milisegundos
        gravity: 'top', // Posición de la notificación (top, bottom, center)
        backgroundColor: '#4CAF50', // Color de fondo de la notificación
        stopOnFocus: true, // Detener la notificación al hacer clic en ella
      }).showToast();
    })
    .catch((err) => {
      btn.value = 'Enviar Formulario';

      // Muestra la notificación de error con Toastify
      Toastify({
        text: `Error al enviar el formulario: ${err}`,
        duration: 4000,
        gravity: 'top',
        backgroundColor: '#FF0000',
        stopOnFocus: true,
      }).showToast();
    });
});
