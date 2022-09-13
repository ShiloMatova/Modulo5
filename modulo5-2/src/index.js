import _ from 'lodash';
import './estilo.css';
import Imagen from './imagen.jpg';

function componente(){
    const elemento = document.createElement('div');
    //Para usar esta linea de comando se necesita la biblioteca lodash
    elemento.innerHTML = _.join(['Hola', 'Webpack'],' ');
    elemento.classList.add('hola');
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);
    return elemento;
}

document.body.appendChild(componente());