import React, { use, useEffect, useState } from "react";

export default function Home({ frase }) {
  const [pizzas, setPizzas] = useState([]);
  console.log(frase);

  let nombre = frase?.character?.name ? frase.character.name : null;

  const getPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
    console.log(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  return frase != {} ? (
    <div className="card">
      <h1>{frase.sentence}</h1>
      <p>{nombre}</p>
    </div>
  ) : (
    <div className="card">
      <h1>No hay frases disponibles</h1>
    </div>
  );
}
