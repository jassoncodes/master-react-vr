import React, { useState } from "react";

export const MiPrimerEstado = () => {
  //Problematica: no funciona, no hace nada
  //   let nombre = "Jasson";
  //   const cambiarNombre = (e) => {
  //     nombre = "Alfredo";
  //   };

  /*
   * useState se conforma por la variable que guarda el dato del estado (en el ejemplo "nombre")
   * y la funcion que accedera al dato del estado y lo modificará
   */
  const [nombre, setNombre] = useState("Jasson");
  const cambiarNombre = (e, nombreFijo) => {
    setNombre(nombreFijo);
  };

  return (
    <div>
      <h3>Componente MiPrimerEstado</h3>
      <span>
        <strong>{nombre}</strong>
      </span>
      <br />
      <button onClick={(e) => cambiarNombre(e, "Alfredo")}>
        Cambiar nombre
      </button>
      <br />
      <input
        type="text"
        onKeyUp={(e) => cambiarNombre(e, e.target.value)}
        placeholder="Escribe un nuevo nombre"
      />
    </div>
  );
};
