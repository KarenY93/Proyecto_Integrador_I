// Interacciones básicas en JavaScript para la página de Avances

// Función para mostrar u ocultar los detalles de los avances
function toggleDetalles() {
  var detalles = document.querySelectorAll('.texto-detalle');
  detalles.forEach(function (elem) {
    if (elem.style.display === "none") {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  });
}

// Función para cambiar el color de las tarjetas con la paleta de la página
function cambiarColor() {
  var tarjetas = document.querySelectorAll('.tarjeta-avance');
  tarjetas.forEach(function (card) {
    card.classList.toggle('color-alterno');
  });
}
