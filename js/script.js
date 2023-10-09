// Mostrar el spinner al principio antes de cargar los datos
var spinner = document.getElementById('spinner');
spinner.style.display = 'block'; // Muestra el spinner

// Espera a que la página se cargue completamente
window.onload = function() {
    // Oculta el spinner después de que la página se haya cargado
    spinner.style.display = 'none';
}
