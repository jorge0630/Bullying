import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container">
        <a
          className="navbar-brand fw-bold"
          style={{ color: "#4A90E2" }}
          href="/"
        >
          Conectados contra el bullying
        <img
          src="/img/logo.png"
          alt="Logo"
          className="img-fluid"
          style={{ maxWidth: "30px" }}
        />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Nosotros">
                Quiénes somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/recurso">
                Recursos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
            {/* 
            <li className="nav-item">
              <a
                href="#"
                className="btn"
                style={{
                  backgroundColor: "#4A90E2",
                  color: "#fff",
                  border: "none",
                  fontWeight: "bold",
                }}
              >
                Jugar
              </a>
            </li> 
            */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
