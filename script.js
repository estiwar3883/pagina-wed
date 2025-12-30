// Esperar a que cargue el HTML
document.addEventListener("DOMContentLoaded", () => {

    // Bienvenida
    alert("Bienvenido a mi portafolio");

    // Cambiar texto
    const boton = document.getElementById("btnCambiar");
    const texto = document.getElementById("textoCambiar");

    boton.addEventListener("click", () => {
        texto.textContent = "Gracias por visitar mi portafolio 🚀";
    });

    // Mostrar / Ocultar
    const btnToggle = document.getElementById("btnToggle");
    const contenido = document.getElementById("contenidoExtra");

    btnToggle.addEventListener("click", () => {
        contenido.classList.toggle("oculto");
    });

});
