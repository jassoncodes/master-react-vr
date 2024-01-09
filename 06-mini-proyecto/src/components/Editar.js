import React from "react";

export const Editar = ({ getPelis, peli, setEditar, setListadoState }) => {
  const guardarEdicion = (e, id) => {
    e.preventDefault();

    //obtener target del form
    const target = e.target;

    //buscar el id del objeto a editar
    const currentPelis = getPelis();
    const index = currentPelis.findIndex((peli) => peli.id === id);

    //crear objeto con data actualizada
    let peliDataUpdate = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };

    //reemplazar objeto
    currentPelis[index] = peliDataUpdate;

    //actualizar local storage
    localStorage.setItem("pelis", JSON.stringify(currentPelis));
    setListadoState(currentPelis);
    setEditar(0);
  };

  return (
    <div className="editForm">
      <h2>Editar: {peli.titulo}</h2>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          id="titulo"
          className="tituloEdit"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          id="descripcion"
          className="descripcionEdit"
          defaultValue={peli.descripcion}
        />
        <input type="submit" className="editButton" value="Actualizar" />
        <input
          type="button"
          className="cancelar"
          value="Cancelar"
          onClick={() => setEditar()}
        />
      </form>
    </div>
  );
};
