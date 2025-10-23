import React, { useState, useEffect } from "react";
import "../style/historia.css";
import data from "../data/aula.json";
import Escena from "../components/escena";

function Historia() {
  const avatarUrl = localStorage.getItem("avatarUrl");
  const aula = Object.fromEntries((data.nodes || []).map((nodo) => [nodo.id, nodo]));

  // Escenario actual del JSON
  const [escenarioActual, setEscenarioActual] = useState(data.start);

  // Escenario fijo que se usará como fondo (solo se define al inicio)
  const [escenarioFondo, setEscenarioFondo] = useState(null);

  const [selecciones, setSelecciones] = useState([]);

  useEffect(() => {
    localStorage.setItem("historia_selecciones", JSON.stringify(selecciones));
  }, [selecciones]);

  const escenario = aula[escenarioActual];

  useEffect(() => {
    const idsConFondo = ["s1", "s2", "s3", "s4", "s5", "s6"];

    if (escenario && idsConFondo.includes(escenario.id)) {
      setEscenarioFondo(escenario.id); // Actualiza el fondo si el id es uno de los permitidos
    }
  }, [escenario]);

  const manejarOpcion = (siguiente, opcionText = null) => {
    setSelecciones((prev) => [
      ...prev,
      {
        nodoId: escenarioActual,
        opcionText,
        opcionTarget: siguiente,
        timestamp: new Date().toISOString(),
      },
    ]);

    if (!siguiente || !aula[siguiente]) {
      setEscenarioActual(data.start);
    } else {
      setEscenarioActual(siguiente);
    }
  };

  return (
    <div className="historia-container">
      <h1 className="historia-title">Conectados contra el Bullying</h1>

      <div className="historia-layout">
        <div className="historia-col-texto">
          {escenario ? (
            <>
              <h2 className="historia-subtitulo">{escenario.title}</h2>
              <p>{escenario.text}</p>

              <div className="historia-opciones">
                {escenario.choices?.length ? (
                  escenario.choices.map((opcion, i) => (
                    <button
                      key={i}
                      className="historia-boton"
                      onClick={() => manejarOpcion(opcion.target, opcion.text)}
                    >
                      {opcion.text}
                    </button>
                  ))
                ) : (
                  <button
                    className="historia-boton"
                    onClick={() => manejarOpcion(null, "Volver al inicio")}
                  >
                    Volver al inicio
                  </button>
                )}
              </div>
            </>
          ) : (
            <p>Cargando historia...</p>
          )}
        </div>

        {/* Fondo fijo según el primer escenario */}
        <div className="historia-col-avatar">
          {(escenarioFondo || escenarioActual === "inicio") && (
            <Escena
              escenarioActual={
                escenarioActual === "inicio"
                  ? "escuela"
                  : escenarioFondo
              }
              avatarUrl={avatarUrl}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Historia;
