import React from "react";

import { Link } from "react-router-dom";


function Banner() {
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
          <span className="text-primary fw-bold">actuar</span> frente al bullying.  
          A través de historias dinámicas y preguntas sencillas, los jugadores podrán
          diseñar su avatar, vivir diferentes situaciones y elegir cómo responder de
          la mejor manera.
        </p>
        <Link to="/juego" className="btn btn-light btn-lg mt-3 fw-bold">
          <i className="bi bi-controller me-2"></i> Descubre el Juego
        </Link>
      </div>
    </section>
  );
}

export default Banner;
