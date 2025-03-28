let pintar = function(colorFondo, colorTexto){
    let elemento = document.querySelector("body")
    let titulo = document.querySelector("h1")
    elemento.style.backgroundColor = colorFondo;
    titulo.style.color = colorTexto;
}

console.log(nombre)
let nombre = "Juan";

let sumar = (a, b) => a + b;


const cambiarColorFondo = function(){
    let edad = 20;
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
}

console.log(edad);

const boton = document.querySelector("#boton");

boton.addEventListener("click", cambiarColorFondo)


body.addEventListener("click", () => {body.style.backgroundColor = "white";})

let subtitulo = document.querySelector("#subtitulo");
