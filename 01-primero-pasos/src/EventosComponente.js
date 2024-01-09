import React from "react";

export const EventosComponente = () => {
  const handleClick = (e, nombre) => {
    alert(`Buttom clicked by ${nombre}`);
  };

  function handleDobleClick(e) {
    alert("Doble clicked!");
  }

  const handleHover = (e, action) => {
    alert(`Hover ${action} on box`);
  };

  const handleFocus = (e) => {
    console.log("Input focused");
  };

  const handleBlur = (e) => {
    console.log("Input unfocused");
  };

  return (
    <div>
      <h3>Eventos en React</h3>
      <p>
        {/* Evento click */}
        <button onClick={(e) => handleClick(e, "Jasson")}>Clic me!</button>
      </p>

      <p>
        {/* Evento dobleclick */}
        <button onDoubleClick={(e) => handleDobleClick(e)}>
          Doble click me!
        </button>
      </p>

      {/* Evento onMouseEnter */}
      <div
        id="caja"
        onMouseEnter={(e) => handleHover(e, "In")}
        onMouseLeave={(e) => handleHover(e, "Out")}
      >
        Hover me
      </div>

      {/* Evento onFocuse y onBlur*/}
      <p>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Nombre"
        />
      </p>
    </div>
  );
};
