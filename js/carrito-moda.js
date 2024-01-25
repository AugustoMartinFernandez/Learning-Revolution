// Obtenir les éléments du DOM
const boutonPanier = document.getElementById('bouton-panier');
const modalPanier = document.getElementById('modal-panier');

// Afficher le modal du panier
boutonPanier.addEventListener('click', function() {
    modalPanier.style.display = 'block';
});

// Fermer le modal du panier
function fermerPanier() {
    modalPanier.style.display = 'none';
}

// Fermer le modal si on clique à l'extérieur
window.addEventListener('click', function(event) {
    if (event.target === modalPanier) {
        fermerPanier();
    }
});
