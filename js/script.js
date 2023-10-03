// Obtén elementos del DOM
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

// Agrega un evento de clic al botón de menú en pantalla móvil
menuToggle.addEventListener("click", () => {
    // Alternar la clase para mostrar u ocultar el menú desplegable
    mobileMenu.classList.toggle("menu-visible");
});

// Agrega un evento de clic al botón de cierre en pantalla móvil
menuClose.addEventListener("click", () => {
    // Oculta el menú desplegable al hacer clic en el botón de cierre
    mobileMenu.classList.remove("menu-visible");
});
