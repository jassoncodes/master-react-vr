import logo from "./logo.svg";
import "./App.css";

import MiComponente from "./MiComponente";
import SegundoComponente from "./SegundoComponente";
import { TercerComponente } from "./TercerComponente";
import { EventosComponente } from "./EventosComponente";

function App() {
  const fichaMedica = {
    cedula: "0930630439",
    altura: "174cm",
    tipoDeSangre: "O-",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="customComponents">
          {/* Custom components */}
          <EventosComponente />
          <hr />
          <TercerComponente ficha={fichaMedica} />
          <hr />
          <SegundoComponente />
          <hr />
          <MiComponente />
        </div>
      </header>
    </div>
  );
}

export default App;
