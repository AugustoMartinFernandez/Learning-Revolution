// Obtener elementos del DOM
const boutonPanier = document.getElementById("bouton-panier");
const modalPanier = document.getElementById("modal-panier");

// Mostrar el modal del carrito al hacer clic en el botón
boutonPanier.addEventListener("click", function () {
  modalPanier.style.display = "block";
});

// Función para cerrar el modal del carrito
function fermerPanier() {
  modalPanier.style.display = "none";
}

// Cerrar el modal si se hace clic fuera de él
window.addEventListener("click", function (event) {
  // Comprobar si el clic se realizó en el modal del carrito
  if (event.target === modalPanier) {
    fermerPanier();
  }
});
