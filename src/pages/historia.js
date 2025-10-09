import React, { useState } from "react";
import "../style/historia.css";
import aula from "../data/aula.json"; // si tienes varios escenarios, harás algo similar

function Historia() {
  const avatarUrl = localStorage.getItem("avatarUrl");

  // Estado: escenario actual
  const [escenarioActual, setEscenarioActual] = useState("inicio");

  // Nodo actual del JSON
  const escenario = aula[escenarioActual];

  const manejarOpcion = (siguiente) => {
    if (siguiente === null) {
      // Cuando no hay más caminos → regresar al inicio
      setEscenarioActual("inicio");
    } else if (aula[siguiente]) {
      // Avanzar a la siguiente clave en el JSON
      setEscenarioActual(siguiente);
    } else {
      console.warn("No existe la clave:", siguiente);
      setEscenarioActual("inicio");
    }
  };

  return (
    <div className="historia-container">
      <h1 className="historia-title">Conectados contra el Bullying</h1>

      <div className="historia-layout">
        {/* LADO IZQUIERDO */}
        <div className="historia-col-texto">
          {escenario && (
            <>
              <div className="historia-texto">
                <p>{escenario.descripcion}</p>
              </div>

              <div className="historia-opciones">
                {escenario.opciones && escenario.opciones.length > 0 ? (
                  escenario.opciones.map((opcion, index) => (
                    <button
                      key={index}
                      className="historia-boton"
                      onClick={() => manejarOpcion(opcion.siguiente)}
                    >
                      {opcion.eleccion}
                    </button>
                  ))
                ) : (
                  <button
                    className="historia-boton"
                    onClick={() => manejarOpcion(null)}
                  >
                    Volver al inicio
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* LADO DERECHO (Avatar) */}
        <div className="historia-col-avatar">
          {avatarUrl && (
            <model-viewer
              src={avatarUrl}
              alt="Tu avatar"
              auto-rotate
              camera-controls
              className="historia-avatar"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Historia;
