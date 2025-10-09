import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [showModal, setShowModal] = useState(false);
  const [aceptado, setAceptado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const politica = localStorage.getItem("politicaAceptada");
    if (politica) setAceptado(true);
  }, []);

  const handleJugar = (e) => {
    e.preventDefault();
    if (aceptado) {
      navigate("/juego");
    } else {
      setShowModal(true);
    }
  };

  const handleAceptar = () => {
    localStorage.setItem("politicaAceptada", "true");
    setAceptado(true);
    setShowModal(false);
    navigate("/juego");
  };

  return (
    <section
      className="text-white text-center d-flex align-items-center position-relative"
      style={{
        background: `url("img/no al bullying.jpg") no-repeat center center/cover`,
        height: "80vh",
      }}
    >
      {/* Overlay oscuro */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
        }}
      ></div>

      {/* Contenido */}
      <div
        className="container position-relative"
        style={{ padding: "30px", borderRadius: "12px" }}
      >
        <h1 className="fw-bold display-4">Descúbrenos</h1>
        <p className="mb-3 fs-5">
          Nuestro juego interactivo está diseñado para ayudar a los niños a{" "}
          <span className="text-warning fw-bold">identificar</span>,{" "}
          <span className="text-success fw-bold">comprender</span> y{" "}
          <span className="text-primary fw-bold">actuar</span> frente al
          bullying. A través de historias dinámicas y preguntas sencillas, los
          jugadores podrán diseñar su avatar, vivir diferentes situaciones y
          elegir cómo responder de la mejor manera.
        </p>

        {/* Botón con control de privacidad */}
        <button
          onClick={handleJugar}
          className="btn btn-light btn-lg mt-3 fw-bold"
          id="btnJugar"
        >
          <i className="bi bi-controller me-2"></i> Descubre el Juego
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{
            display: "flex",
            backgroundColor: "rgba(0,0,0,0.6)",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1050,
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4 rounded-4 shadow">
              <h4 className="mb-3 fw-bold text-center">
                Política de Privacidad
              </h4>
              <div
                className="mb-3"
                style={{
                  maxHeight: "200px",
                  overflowY: "auto",
                  textAlign: "justify",
                }}
              >
                <p>
                  En <strong>Conectado Contra El Bullying</strong> valoramos tu privacidad. Este
                  juego educativo no recopila información personal identificable,
                  solo datos anónimos sobre la interacción para mejorar la
                  experiencia.
                </p>
                <p>
                  Puedes leer la política completa{" "}
                  <a
                    href="/politica"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aquí
                  </a>
                  .
                </p>
              </div>

              <div className="form-check text-start mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="aceptarPolitica"
                  onChange={(e) => setAceptado(e.target.checked)}
                />
                <label
                  className="form-check-label"
                  htmlFor="aceptarPolitica"
                  style={{ fontSize: "0.9rem" }}
                >
                  He leído y acepto la Política de Privacidad
                </label>
              </div>

              <div className="text-center">
                <button
                  className="btn btn-primary px-4 fw-bold"
                  onClick={handleAceptar}
                  disabled={!aceptado}
                >
                  Aceptar y continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Banner;
