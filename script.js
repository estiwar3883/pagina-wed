
document.addEventListener("DOMContentLoaded", () => {

    alert("Bienvenido a mi portafolio");

    const boton = document.getElementById("btnCambiar");
    const texto = document.getElementById("textoCambiar");

    boton.addEventListener("click", () => {
        texto.textContent = "Gracias por visitar mi portafolio 🚀";
    });

    const btnToggle = document.getElementById("btnToggle");
    const contenido = document.getElementById("contenidoExtra");

    btnToggle.addEventListener("click", () => {
        contenido.classList.toggle("oculto");
    });

});
