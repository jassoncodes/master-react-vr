import { GuardarEnStorage } from "../helpers/GuardarEnStorage";
import React, { useState } from "react";

export const AgregarTitulo = ({ setListadoState }) => {
  const tituloComponente = "Añadir título";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    //guardar el estado
    setPeliState(peli);
    //actualizar estado del listado principal
    setListadoState((prev) => (!prev ? [peli] : [...prev, peli]));
    // setListadoState((prev) => [...prev, peli]);

    //guardar en el local storage
    GuardarEnStorage("pelis", peli);
  };

  return (
    <>
      <div className="add">
        <h3 className="title">{tituloComponente}</h3>
        {titulo && descripcion && "Título agregado:" + titulo}

        <form onSubmit={conseguirDatosForm}>
          <input
            id="titulo"
            name="titulo"
            className="tituloPeli"
            type="text"
            placeholder="Titulo"
            autoComplete="off"
          />
          <textarea
            id="descripion"
            name="descripcion"
            placeholder="descripción"></textarea>
          <input type="submit" value="Guardar" className="guardarButton" />
        </form>
      </div>
    </>
  );
};
