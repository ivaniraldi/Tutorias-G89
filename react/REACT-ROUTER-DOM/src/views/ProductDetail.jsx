import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { pepito } = useParams();


  const getProduct = async () => {
    const respuesta = await fetch(
      `https://fakestoreapi.com/products/${pepito}`
    );
    const data = await respuesta.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, [product, pepito]);

  

  return (
    <>
      {product ? (
        <div className="card">
          <img
            src={product?.image}
            className="card-img-top"
            style={{ width: "auto", height: "300px", objectFit: "contain" }}
            alt="green iguana"
          />
          <div className="card-body">
            <h4>{product?.title?.slice(0, 50)}</h4>
            <p className="card-text">
              {product?.description?.slice(0, 100)}... <br />
              <span className="badge bg-secondary p-2">{product.category}</span>
            </p>
            <div>
              <Link
                to={`/product/${product.id}`}
                className="btn btn-success me-2"
                type="button"
              >
                Ver detalle
              </Link>
              <button className="btn btn-primary" type="button">
                {product?.price} USD
              </button>
              <button className="btn btn-link text-warning" type="button">
                {product?.rating?.rate} <i className="fa-solid fa-star"></i>
              </button>
            </div>
          </div>
        </div>
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
            <p className="mt-2">Cargando producto...</p>
          </div>
        </div>
      )}
    </>
  );
}
