import { useState } from "react";
import { AgregarTitulo } from "./components/AgregarTitulo";
import { Buscador } from "./components/Buscador";
import { Listado } from "./components/Listado";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Netflix Favs</h1>
      </header>
      {/* navegacion */}
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Series</a>
          </li>
          <li>
            <a href="/#">Documentales</a>
          </li>
        </ul>
      </nav>
      {/* contenido principal */}
      <section className="content">
        {/* aqui va el listado de peliculas */}
        {/* se envian las props del estado desde el componente principal
        para almacenar el estado en el componente principal y poder actualizarlo */}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      {/* barra lateral */}
      <aside className="lateral">
        {/* buscador */}
        <Buscador
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
        {/* agregar titulos */}
        <AgregarTitulo setListadoState={setListadoState} />
      </aside>
      {/* pie de pagina */}
      <footer className="footer">&copy; Netflix Favs by jassoncodes</footer>
    </div>
  );
}

export default App;
