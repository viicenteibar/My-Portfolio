let emptyElement = document.querySelector('.about .empty');
let titleElement = document.querySelector('.about .title');

let figureElements = document.querySelectorAll('.services figure');

window.addEventListener( 'mousemove', handleMouseMove);

function handleMouseMove( event ) {

    emptyElement.style.flexBasis = event.clientX + 'px';
    titleElement.style.flexBasis = event.clientY / 2 + 'px';

    figureElements.forEach( function( element ) {
        element.style.flexBasis = (window.innerWidth - event.clientX) + 'px';
    } );
}

const img = document.getElementById("correoImg");

        img.addEventListener("click", () => {
            img.classList.add("animate__animated", "animate__tada");
            img.style.transition = "2s cubic-bezier(.77,.28,.42,.93)";
            img.style.transform = "scale(1.05)";
            img.src = "./img/correo-verde-claro.png"; // Cambia a la imagen verde

            img.addEventListener("animationend", () => {
                img.classList.remove("animate__tada");
                img.style.transform = "scale(1)"; // Vuelve al tamaño original
                img.src = "./img/correo.png"; // Vuelve a la imagen original
            }, { once: true });
        });