import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import Gallery from "../components/Gallery";
import { GlobalContext } from "../context/GlobalContext";

export default function Home() {
  const { products } = useContext(GlobalContext)




  return (
    <>
      {products.length > 0 ? (
        <Gallery products={products} />
      ) : (
        <div className="container d-flex justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Cargando productos...</p>
          </div>
        </div>
      )}
    </>
  );
}
