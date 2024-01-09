import React from "react";

export default function SegundoComponente() {
  const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];
  //const libros = [];

  return (
    <div className="segundo-componente">
      <h3>Libros</h3>
      {libros.length >= 1 ? (
        <ul>
          {libros.map((libro, indice) => {
            return <li key={indice}>{libro}</li>;
          })}
        </ul>
      ) : (
        <p>No hay libros</p>
      )}
    </div>
  );
}
