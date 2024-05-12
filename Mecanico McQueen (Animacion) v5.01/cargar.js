document.addEventListener("DOMContentLoaded", function(event) {
    // Muestra el spinner cuando se carga completamente el DOM
    document.getElementById("html-spinner").style.display = "block";

    // Después de 3 segundos, redirecciona al usuario a la página principal
    setTimeout(function() {
        window.location.href = "principal.html"; // Cambia esto por la ruta correcta de tu página principal
    }, 4000); // 3000 milisegundos = 3 segundos
});