import React, { useEffect, useState } from "react";
import { AvisoComponente } from "./AvisoComponente";
const dayjs = require("dayjs");
//const localizedFormat = require("dayjs/plugin/localizedFormat");

//dayjs.extend(localizedFormat);

export const PruebasComponent = () => {
  const [userName, setUserName] = useState("Jasson");
  const [fecha, setFecha] = useState("27-10-2023");
  const [contador, setContador] = useState(0);

  const modUser = (e) => {
    setUserName(e.target.value);
  };

  const cambiarFecha = (e) => {
    setFecha(dayjs().format("DD/MM/YYYY HH:mm:ss:SSS"));
  };

  //se ejecutará 1 sola vez al carga el componente porque el array de dependencias esta vacio
  //   useEffect(() => {
  //     console.log("componente cargado");
  //   }, []);
  //
  // useEffect((callback) => { ... }, [array de dependencias (vars/valores/propiedades/estados) a reaccionar])
  // se ejecutara solo cuando se modifique la lista de propiedades pasadas en el array
  useEffect(() => {
    setContador(contador + 1);
    console.log(`userName modificado: ${contador} veces`);
  }, [fecha, userName]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="customComponent">
      <h3>El efecto - useEffectHook</h3>
      <label
        className={
          contador >= 5 ? "label-primary label-warning" : "label-primary "
        }>
        <strong>{userName}</strong>
      </label>
      <label className="label-primary label-secondary">{fecha}</label>
      <br />
      <input
        className="userDataField"
        type="text"
        onChange={modUser}
        placeholder="Cambia el nombre"
      />
      <button onClick={cambiarFecha}>Cambiar fecha</button>

      {userName === "ALFREDO" && <AvisoComponente />}
    </div>
  );
};
