document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const btn = document.getElementById('button');
  btn.value = 'Enviando formulario..🤖';

  const serviceID = 'default_service';
  const templateID = 'template_94cosd7';

  emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          btn.value = 'Enviar correo 😊';
          Toastify({
              text: "¡Correo enviado con éxito!",
              duration: 4000,
              close: true,
              gravity: "top", // or "top"
              position: "center", // or "left"
              backgroundColor: "#9812e6"
          }).showToast();
          this.reset(); // Esto reinicia el formulario
      }, (err) => {
          btn.value = 'Enviar correo 😊';
          Toastify({
              text: "Error al enviar el correo. Por favor, inténtalo de nuevo.",
              duration: 3000,
              close: true,
              gravity: "top", // or "top"
              position: "center", // or "left"
              backgroundColor: "red"
          }).showToast();
          console.error(JSON.stringify(err));
      });
});