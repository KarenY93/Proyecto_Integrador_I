// Validación básica en JavaScript para el Formulario de Contacto

document.addEventListener("DOMContentLoaded", function () {
  var formulario = document.getElementById("form-contacto");
  var respuesta = document.getElementById("mensaje-respuesta");

  if (!formulario) return;

  formulario.addEventListener("submit", function (evento) {
    // Evitar el envío automático del formulario
    evento.preventDefault();

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();

    // 1. Validar que no haya campos vacíos
    if (nombre === "" || correo === "" || mensaje === "") {
      mostrarMensaje("Por favor, completa todos los campos requeridos.", "mensaje-error");
      return;
    }

    // 2. Validación básica del formato de correo
    if (!correo.includes("@") || !correo.includes(".")) {
      mostrarMensaje("Por favor, ingresa un correo electrónico válido.", "mensaje-error");
      return;
    }

    // 3. Si todo es correcto, mostrar éxito y limpiar formulario
    mostrarMensaje("¡Gracias por comunicarte con nosotros, " + nombre + "! Tu mensaje ha sido enviado correctamente.", "mensaje-exito");
    formulario.reset();
  });

  // Función auxiliar para mostrar mensajes de estado
  function mostrarMensaje(texto, tipoClase) {
    respuesta.innerText = texto;
    respuesta.className = "center mensaje-estado " + tipoClase;
    respuesta.style.display = "block";
  }
});

