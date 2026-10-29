// Mensaje de bienvenida para la página de inicio (index.html)

document.addEventListener("DOMContentLoaded", function () {
  // Opción con Toast de Materialize (diseño estilizado y no bloqueante)
  M.toast({
    html: '¡Bienvenido a Skyra Airline! Explora el mundo con nosotros.',
    classes: 'deep-navy white-text rounded',
    displayLength: 4000
  });

  // Si prefieres la alerta emergente clásica de JavaScript, puedes usar:
  // alert("¡Bienvenido a Skyra Airline!");
});

