let compras = [
  {
    id: 1,
    nombre: "Arroz",
    precio: 5.4,
    pagado: false,
  },
  {
    id: 2,
    nombre: "Feijão",
    precio: 8.2,
    pagado: false,
  },
  {
    id: 3,
    nombre: "Cebola",
    precio: 4.7,
    pagado: true,
  },
];

const contenedor = document.querySelector("#root");

let plantilla = "";

for (el of compras) {
  if (el.pagado == true) {
    plantilla += `
        <div>
            <h2>${el.nombre}</h2>
            <p>${el.precio}</p>
            <p>Pagado</p>
        </div>`;
  } else {
    plantilla += `
        <div>
            <h2>${el.nombre}</h2>
            <p>${el.precio}</p>
            <p>Pendiente</p>
        </div>`;
  }
}
contenedor.innerHTML = plantilla;

let actores = [
  { id: 431, nombre: "Jhonny Depp" },
  { id: 124, nombre: "Brad Pitt" },
  { id: 541, nombre: "Leonardo DiCaprio" },
  { id: 664, nombre: "Morgan Freeman" },
];

