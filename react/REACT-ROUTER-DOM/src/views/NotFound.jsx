import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center h-full">
      <div class="alert alert-primary" role="alert">
        <div class="d-flex gap-4">
          <span>
            <i class="fa-solid fa-circle-info icon-primary"></i>
          </span>
          <div class="d-flex flex-column gap-2">
            <h6 class="mb-0">⚠️ Error 404</h6>
            <p class="mb-0">La pagina que estas buscando no existe.</p>
            <p className="text-link text-sm"><Link to={"/"}>Volver al inicio</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
