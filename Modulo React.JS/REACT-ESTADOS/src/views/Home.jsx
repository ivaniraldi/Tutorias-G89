import React from "react";
import Footer from "../components/Footer";
import { useState } from "react";
import BotonIncrementar from "../components/BotonIncrementar";
import BotonDisminuir from "../components/BotonDisminuir";
import Formulario from "../components/Formulario";

export default function Home() {
  const [cuenta, setCuenta] = useState(0);

  const incrementarCuenta = () => {
    setCuenta(cuenta + 1);
  };
  const disminuirCuenta = () => {
    setCuenta(cuenta - 1);
  };

  return (
    <div>
      <h1 className="text-center text-2xl border-b border">
        Tutoria Estados de los componentes
      </h1>
      <div className="d-flex justify-content-center">
        <div>
          <h2 className="text-center">Cuenta: {cuenta}</h2>
          <BotonIncrementar incrementar={incrementarCuenta}/>
          <BotonDisminuir disminuirCuenta={disminuirCuenta}/>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Formulario />
      </div>
      <Footer />
    </div>
  );
}
