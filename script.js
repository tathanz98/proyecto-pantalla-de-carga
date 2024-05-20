// Asegúrate de enlazar este archivo en tu HTML con <script src="script.js"></script>

document.addEventListener("DOMContentLoaded", function() {
    // Espera hasta que la página haya terminado de cargar todos los recursos
    window.onload = function() {
        hideLoadingScreen();
    };
});

// Función para ocultar la pantalla de carga
function hideLoadingScreen() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// Función para mostrar la pantalla de carga
function showLoadingScreen() {
    document.getElementById("loading-screen").style.display = "flex";
    document.getElementById("content").style.display = "none";
}
