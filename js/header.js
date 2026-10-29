// Aplicar tema guardado inmediatamente para evitar parpadeos visuales al navegar
(function () {
  if (localStorage.getItem("modo-tema") === "oscuro") {
    document.body.classList.add("modo-oscuro");
  }
})();

document.addEventListener("DOMContentLoaded", function () {

  fetch("header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo cargar el encabezado");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // Activar el menú móvil de Materialize
      const menus = document.querySelectorAll(".sidenav");
      M.Sidenav.init(menus);

      // Activar el control de modo oscuro/claro (fondo, tarjetas y header)
      iniciarModoTema();
    })
    .catch(error => console.error(error));

});

/**
 * Control del modo oscuro / claro para toda la página (fondo, tarjetas y header).
 * Guarda la preferencia en localStorage para conservarla entre páginas.
 */
function iniciarModoTema() {
  const btnTema = document.getElementById("btn-modo-tema");
  const btnTemaMovil = document.getElementById("btn-modo-tema-movil");
  const icono = document.getElementById("icono-tema");
  const iconoMovil = document.getElementById("icono-tema-movil");

  // Sincronizar iconos según el estado inicial de la página
  actualizarIconos(document.body.classList.contains("modo-oscuro"));

  function actualizarIconos(esOscuro) {
    const nombreIcono = esOscuro ? "wb_sunny" : "brightness_4";
    if (icono) icono.innerText = nombreIcono;
    if (iconoMovil) iconoMovil.innerText = nombreIcono;
  }

  function alternarTema(evento) {
    if (evento) evento.preventDefault();
    const esOscuro = document.body.classList.toggle("modo-oscuro");
    actualizarIconos(esOscuro);
    localStorage.setItem("modo-tema", esOscuro ? "oscuro" : "claro");
  }

  if (btnTema) {
    btnTema.addEventListener("click", alternarTema);
  }
  if (btnTemaMovil) {
    btnTemaMovil.addEventListener("click", alternarTema);
  }
}
