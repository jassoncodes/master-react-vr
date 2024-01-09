import React from "react";
import PropTypes from "prop-types";

export const TercerComponente = ({ nombre, apellido, ficha }) => {
  return (
    <div>
      <h3>Comunicación entre componentes</h3>
      <ul>
        <li>{nombre}</li>
        <li>{apellido}</li>
        <h4>Ficha</h4>
        <ul>
          {Object.keys(ficha).map((key) => {
            return (
              <li key={key}>
                {key}: {ficha[key]}
              </li>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

/*
 * PropTypes propio de react se usa para especificar y validar
 * el tipo de dato pasado entre componentes.
 * "isRequired" define una propiedad como obligatoria
 */
TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  ficha: PropTypes.object.isRequired,
};

TercerComponente.defaultProps = {
  nombre: "Luis",
  apellido: "Pincay",
};
