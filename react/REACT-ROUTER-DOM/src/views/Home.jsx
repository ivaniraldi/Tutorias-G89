import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Gallery from "../components/Gallery";

export default function Home() {
  const apiUrl = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const respuesta = await fetch(apiUrl);
    let data = await respuesta.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);


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
