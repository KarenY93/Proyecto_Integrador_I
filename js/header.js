
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
    })
    .catch(error => console.error(error));

});
