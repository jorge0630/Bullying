import React from "react";

function Footer() {
  return (
    <footer
      className="text-white pt-4"
      style={{ backgroundColor: "#4A90E2" }}
    >
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Columna 1: Contacto */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contáctanos</h5>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>Cartagena, Colombia
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>+57 3015317886
            </p>
            <p className="mb-0">
              <i className="bi bi-envelope-fill me-2"></i>conectadoscontraelbullying@hotmail.com
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#inicio"
                  className="text-white text-decoration-none"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#quienes"
                  className="text-white text-decoration-none"
                >
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a
                  href="#juego"
                  className="text-white text-decoration-none"
                >
                  Juego
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-white text-decoration-none"
                >
                  Contáctenos
                </a>
              </li>
              <li>
                <a
                  href="/politica"
                  className="text-white text-decoration-none"
                >
                  Politicas de privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Síguenos</h5>
            <div className="d-flex justify-content-center justify-content-md-start">
              <a
                href="https://www.instagram.com/conectadoscontraelbullying/"
                className="text-white me-3"
                style={{ fontSize: "1.5rem" }}
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://wa.me/573015317886"
                className="text-white"
                style={{ fontSize: "1.5rem" }}
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="mt-3 mb-2 border-light" />

        {/* Copyright */}
        <div className="text-center pb-2">
          <small>
            © 2025 Unidos contra el Bullying. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
