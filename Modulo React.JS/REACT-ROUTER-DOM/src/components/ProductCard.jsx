/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { category, description, id, image, price, rating, title } = product;
  return (
    <div className="card">
      <img src={image} className="card-img-top" style={{width:"auto", height:"300px", objectFit:"contain"}} alt="green iguana" />
      <div className="card-body">
        <h4>{title.slice(0, 50)}</h4>
        <p className="card-text">
          {description.slice(0, 100)}... <br />
          <span className="badge bg-secondary p-2">{category}</span>
        </p>
        <div>
        <Link to={`/product/${id}`} className="btn btn-success me-2" type="button">
            Ver detalle
          </Link>
          <button className="btn btn-primary" type="button">
            {price} USD
          </button>
          <button className="btn btn-link text-warning" type="button">
            {rating.rate} <i className="fa-solid fa-star"></i>
          </button>

        </div>
      </div>
    </div>
  );
}
