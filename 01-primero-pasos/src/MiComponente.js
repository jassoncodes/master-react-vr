//1 Importar modulos de react
import React from "react";

//Funcion del componente
export default function MiComponente() {
  //const javascriptTechs = ["React", "Angular", "VueJS"];
  const nombre = "Jasson";
  const apellido = "Pincay";
  const web = "jasson.codes";

  return (
    <div>
      <h3>Usuario</h3>
      <ul>
        <li>Nombre: {nombre}</li>
        <li>Apellido: {apellido}</li>
        <li>
          Web: <strong>{web}</strong>
        </li>
      </ul>
    </div>
  );
}

//Export (Si no está declarado como export default)
