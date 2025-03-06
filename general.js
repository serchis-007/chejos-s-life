let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 3; // Posición inicial

function loadShow() {
    let sett = 0;

    // Reiniciar el estilo del elemento activo
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Estilos para los elementos a la derecha
    for (let i = active + 1; i < items.length; i++) {
        sett++;
        items[i].style.transform = `translateX(${120 * sett}px) scale(${1 - 0.2 * sett}) perspective(400px) rotateY(-10deg)`;
        items[i].style.zIndex = -sett;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = sett > 2 ? 0 : 0.6;
    }

    sett = 0; // Reset para los elementos a la izquierda

    // Estilos para los elementos a la izquierda
    for (let i = active - 1; i >= 0; i--) {
        sett++;
        items[i].style.transform = `translateX(${-120 * sett}px) scale(${1 - 0.2 * sett}) perspective(400px) rotateY(10deg)`;
        items[i].style.zIndex = -sett;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = sett > 2 ? 0 : 0.6;
    }
}

// Cargar el estado inicial del carrusel
loadShow();

// Botón "Siguiente"
next.onclick = function () {
    if (active + 1 < items.length) {
        active++;
        loadShow();
    }
};

// Botón "Anterior"
prev.onclick = function () {
    if (active - 1 >= 0) {
        active--;
        loadShow();
    }
};
