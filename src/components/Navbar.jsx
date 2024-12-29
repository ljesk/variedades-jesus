import React from "react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="sidebar">
      <h1 className="logo">Variedades Jesús</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
          <li>
            <Link to="/location">Ubicación</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
