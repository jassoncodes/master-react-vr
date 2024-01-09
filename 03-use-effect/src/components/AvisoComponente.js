import React from "react";
import { useEffect } from "react";

export const AvisoComponente = () => {
  useEffect(() => {
    //se ejecuta una vez al montar
    alert("Componente montado");

    //ejecutar al desmontar
    return () => {
      alert("Componente desmontado");
    };
  }, []);

  return (
    <div>
      <hr />
      <h3>Saludos Alfredo</h3>
      <button
        onClick={(e) => {
          alert("Hola Alfredo");
        }}>
        Mostrar alerta
      </button>
    </div>
  );
};
