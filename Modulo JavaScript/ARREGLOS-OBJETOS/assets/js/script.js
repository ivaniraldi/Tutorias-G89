const ventasDeLaSemana = [
  { dia: "Lunes", total: 34000 },
  { dia: "Martes", total: 40000 },
  { dia: "Miércoles", total: 41000 },
  { dia: "Jueves", total: 50000 },
  { dia: "Viernes", total: 62000 },
  { dia: "Sábado", total: 85000 },
  { dia: "Domingo", total: 20000 },
];

let arregloRecortado = ventasDeLaSemana.slice(0, 3)

console.log(arregloRecortado)