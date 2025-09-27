import React, { useState } from "react";

const escenarios = {
  inicio: {
    texto: "Era un día soleado cuando tu avatar salió de casa.",
    opciones: [
      { texto: "Ir al bosque 🌳", siguiente: "bosque" },
      { texto: "Ir a la ciudad 🏙️", siguiente: "ciudad" },
    ],
  },
  bosque: {
    texto: "El bosque es misterioso… escuchas ruidos extraños.",
    opciones: [
      { texto: "Seguir el ruido", siguiente: "cueva" },
      { texto: "Ignorar y avanzar", siguiente: "lago" },
    ],
  },
  ciudad: {
    texto: "La ciudad está llena de gente y movimiento.",
    opciones: [
      { texto: "Visitar la plaza", siguiente: "plaza" },
      { texto: "Entrar a una taberna", siguiente: "taberna" },
    ],
  },
  cueva: {
    texto: "Entras en la cueva oscura y ves dos caminos.",
    opciones: [
      { texto: "Tomar el camino iluminado", siguiente: "tesoro" },
      { texto: "Explorar el lado oscuro", siguiente: "monstruo" },
    ],
  },
  lago: {
    texto: "Llegas a un lago tranquilo con aguas cristalinas.",
    opciones: [
      { texto: "Beber agua", siguiente: "poderes" },
      { texto: "Descansar en la orilla", siguiente: "finalPaz" },
    ],
  },
  plaza: {
    texto: "En la plaza un sabio te ofrece un consejo.",
    opciones: [
      { texto: "Escuchar al sabio", siguiente: "misión" },
      { texto: "Ignorarlo y seguir", siguiente: "mercado" },
    ],
  },
  taberna: {
    texto: "La taberna está llena de aventureros.",
    opciones: [
      { texto: "Unirte a ellos", siguiente: "equipo" },
      { texto: "Quedarte solo", siguiente: "problemas" },
    ],
  },
  // ... puedes seguir agregando escenarios
};

function Historia() {
  const avatarUrl = localStorage.getItem("avatarUrl");
  const [escenarioActual, setEscenarioActual] = useState("inicio");

  const escenario = escenarios[escenarioActual];

  const manejarOpcion = (siguiente) => {
    setEscenarioActual(siguiente);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Inicio de la Historia</h1>

      {avatarUrl ? (
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
          <model-viewer
            src={avatarUrl}
            alt="Tu avatar"
            auto-rotate
            camera-controls
            style={{ width: "300px", height: "400px" }}
          />
        </div>
      ) : (
        <p>No hay avatar cargado.</p>
      )}

      {/* Texto del escenario */}
      <p style={{ fontSize: "18px", marginTop: "20px" }}>{escenario.texto}</p>

      {/* Opciones del escenario */}
      <div style={{ marginTop: "20px" }}>
        {escenario.opciones.map((opcion, index) => (
          <button
            key={index}
            onClick={() => manejarOpcion(opcion.siguiente)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              background: "#4CAF50",
              color: "white",
              cursor: "pointer",
            }}
          >
            {opcion.texto}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Historia;


