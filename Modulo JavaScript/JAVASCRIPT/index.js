//Acá voy a definir mis variables de mi persona
let edad = 26;
const colorDeOjos = "Marrones";


//Prompt SIEMPRE devuelve un string
//let numero1 = prompt("Ingrese el primer número");
//let numero2 = prompt("Ingrese el segundo número");


//Para convertir un string a número, se usa Number( *variable* )

//const suma = Number(numero1) + Number(numero2);

//console.log(suma);

//alert(suma)

//Aca comenzamos con el DOM

let titulo = document.querySelector("h2")
let subtitulo = document.querySelector(".subtitulo")
let subitulo2 = document.querySelector("#subtitulo2")



titulo.innerHTML = "Este contenido fue agregado con JavaScript"

subtitulo.innerHTML = "Este contenido fue agregado con JavaScript también"

subitulo2.innerHTML = "Este contenido fue agregado con JavaScript también"


let parrafo = document.querySelector("p")
parrafo.innerHTML = "Este contenido fue agregado con JavaScript en la Actividad 2"


let parrafo2 = document.querySelector("#parrafo")
parrafo2.innerHTML += " Este contenido fue agregado con JavaScript"

parrafo2.style.color = "red"
parrafo2.style.fontSize = "30px"
parrafo2.style.backgroundColor = "black"
parrafo2.style.textAlign = "center"

let imagen = document.querySelector("#img")

let boton1 = document.querySelector("#btn1")
let boton2 = document.querySelector("#btn2")

boton1.addEventListener("click", () => {
    imagen.style.borderRadius = "50%"
})

boton2.addEventListener("click", () => {
    imagen.style.borderRadius = "0%"
})

let numero = document.querySelector("#num1")

let botonSumar = document.querySelector("#btnSumar")

botonSumar.addEventListener("click", () => {
    numero.textContent = numero.textContent + 1
})