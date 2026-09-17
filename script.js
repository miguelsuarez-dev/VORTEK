const botonOpciones = document.getElementById("botonOpciones");
const paginas = document.getElementById("paginas");

function mostrarPagina(id) {
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(sec => sec.classList.remove('activa'));
    
    const seccionActiva = document.getElementById(id);
    if (seccionActiva) {
        seccionActiva.classList.add('activa');
    }
}

// Evento para alternar la clase "activo"
botonOpciones.addEventListener("click", () => {
    paginas.classList.toggle('activo');
});