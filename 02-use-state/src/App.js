import logo from "./logo.svg";
import "./App.css";
import { MiPrimerEstado } from "./components/MiPrimerEstado";
import { Ejercicio1 } from "./components/Ejercicio1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Estado en React - Hook useState</h2>
        {/* {<MiPrimerEstado />} */}
        <Ejercicio1 currentYear={new Date().getFullYear()} />
      </header>
    </div>
  );
}

export default App;
