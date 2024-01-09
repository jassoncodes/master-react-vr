import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

//Se reciben las props listadoState y setListadoState del componente padre (principal)
export const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    getPelis();
  }, []);

  /**
   * Obtener peliculas del local storage
   * @returns {json} Listado de pelis
   */
  const getPelis = () => {
    let pelis = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(pelis);
    return pelis;
  };

  const borrarPeli = (id) => {
    //1. obtener pelis almacenadas
    const pelisLocalStorage = getPelis();
    //2. filtrar las pelis para que elimine del array la que se debe eliminar
    const pelisListadoUpdated = pelisLocalStorage.filter(
      (peli) => peli.id !== parseInt(id)
    );
    //3. actualizar el estado del listado de pelis
    setListadoState(pelisListadoUpdated);
    //4. actualizar localstorage
    localStorage.setItem("pelis", JSON.stringify(pelisListadoUpdated));
  };

  return (
    <>
      {/* peliculas */}
      {/* {listadoState && listadoState !== null */}
      {listadoState && listadoState.length > 0
        ? listadoState.map((peli) => {
            return (
              <article key={peli.id} className="peli-item">
                <h3 className="title">{peli.titulo}</h3>
                <p className="descripcion">{peli.descripcion}</p>
                <button
                  className="editButton"
                  onClick={() => setEditar(peli.id)}>
                  Editar
                </button>
                {/* mostrar un formulario para editar */}
                {editar === peli.id && (
                  <Editar
                    getPelis={getPelis}
                    peli={peli}
                    setEditar={setEditar}
                    setListadoState={setListadoState}
                  />
                )}
                <button
                  className="deleteButton"
                  onClick={() => borrarPeli(peli.id)}>
                  Borrar
                </button>
              </article>
            );
          })
        : "No hay contenido para mostrar"}
    </>
  );
};
