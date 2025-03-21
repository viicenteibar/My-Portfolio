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
