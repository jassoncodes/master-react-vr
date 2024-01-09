/*
1. Crear un componente
2. Recibir una prop con el año actual
3. Usar funciones para sacar el año
4. Usar estados y eventos para tener dos botones
    - Pasar al proximo año
    - Ir al año anterior
    - Mostrar en todo momento el año por pantalla

5. Validar que el año sea un numero y sea requerido (prop)
6. Cambiar el año mediante un input de texto y que se cambie dinamicamente 
 */

import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const Ejercicio1 = ({ currentYear }) => {
  const [year, setYear] = useState(currentYear);

  const changeYear = (e) => {
    let inputYear = parseInt(e.target.value);
    if (Number.isInteger(inputYear)) {
      setYear(inputYear);
    } else {
      setYear(new Date().getFullYear());
    }
  };

  const handleClick = (e) => {
    e.target.id === "nextYear" ? setYear(year + 1) : setYear(year - 1);
  };

  return (
    <div>
      <h3 id="year">{year}</h3>
      <div className="controls">
        <button onClick={handleClick} id="nextYear" className="nextYear">
          Next Year
        </button>
        <button onClick={handleClick} id="prevYear" className="prevYear">
          Prev Year
        </button>
        <input onKeyUp={changeYear} type="text" placeholder="Cambia el año" />
      </div>
    </div>
  );
};

Ejercicio1.defaultProps = {
  currentYear: new Date().getFullYear(),
};

Ejercicio1.propTypes = {
  currentYear: PropTypes.number.isRequired,
};
