import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    e.preventDefault();
    //crear estado y actualizarlo
    setBusqueda(e.target.value);

    //listado completo de peliculas (importado como prop del componente padre)
    //filtrar para buscar coincidencias
    let pelisEncontradas = listadoState.filter((peli) => {
      return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });

    console.log(busqueda.length, busqueda);
    //verificar resultado
    if (busqueda.length <= 1 || pelisEncontradas.length <= 0) {
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }

    //si existe dar valor de todo en local storage
    //actualizar estado del listado principal con la data filtrada
    setListadoState(pelisEncontradas);
  };
  return (
    <>
      <div className="search">
        {busqueda === "" ? (
          <h3 className="title">Buscador</h3>
        ) : (
          <h3 className="title">Buscando: {busqueda}</h3>
        )}
        {noEncontrado === true && busqueda.length > 1 && (
          <span className="noEncontrado">
            No se ha encontrado ninguna coincidencia
          </span>
        )}
        <form action="">
          <input
            type="text"
            name="busqueda"
            id="buscador"
            placeholder="Título a buscar"
            autoComplete="off"
            onChange={buscarPeli}
          />
          <button className="buscarButton">Buscar</button>
        </form>
      </div>
    </>
  );
};
