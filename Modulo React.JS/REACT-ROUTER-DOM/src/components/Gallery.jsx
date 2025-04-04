import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function Gallery({ products }) {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = products.filter((p) => {
    return p.title.toLowerCase().includes(busqueda.toLowerCase()) || 
    p.category.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.description.toLowerCase().includes(busqueda.toLowerCase()) ;
  });

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center flex-column flex-lg-row my-2 w-100">
        <form className="me-2 mb-2 mb-lg-0">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="form-control w-100"
            placeholder="Search"
          />
        </form>
        <a className="btn btn-primary" href="">
          Buscar
        </a>
      </div>
      <div className="gallery">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((p) => <ProductCard product={p} key={p.id} />)
        ) : (
          <div className="alert alert-warning my-8" role="alert">
            <div className="d-flex gap-4">
              <span>
                <i className="fa-solid fa-circle-exclamation icon-warning"></i>
              </span>
              <div className="d-flex flex-column gap-2">
                <h6 className="mb-0">No se encontraron productos.</h6>
                <p className="mb-0">
                  Intenta con otras palabras.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
