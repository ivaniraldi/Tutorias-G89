import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Alert from "react-bootstrap/Alert";

export default function Seccion({ objeto, etiquetas }) {
  const { titulo = "Titulo no encontrado", texto, imagen, precio = 0 } = objeto;

  return (
    <Card className="my-3">
      <Card.Img variant="top" style={{ width: "150px" }} src={imagen} />
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{texto}</Card.Text>

        {precio > 0 ? (
          <Button variant="info">Precio: ${precio}</Button>
        ) : (
          <Alert variant={"warning"}>No hay precio disponible</Alert>
        )}
      </Card.Body>
    </Card>
  );
}
