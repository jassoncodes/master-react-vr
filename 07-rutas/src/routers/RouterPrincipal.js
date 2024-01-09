import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Inicio } from "../components/inicio";
import { Articulos } from "../components/articulos";
import { Contacto } from "../components/contacto";
import { Error404 } from "../components/error-404";

/**
 * Componente principal que define rutas
 */
export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
