import React, { useState, useEffect } from "react";
import "../style/historia.css";
import data from "../data/aula.json";
import Escena from "../components/escena";

const TELEGRAM_BOT_TOKEN = "8201719493:AAHLS-bXR38sgVESe5vq59KRXp4ezj8oRiM"; // Pon aquí tu token real
const TELEGRAM_CHAT_ID = "-4850003486"; // Pon aquí tu chat_id real

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
        descripcion: escenario.text,
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

  // Función para enviar resumen de decisiones a Telegram
  const enviarResumenTelegram = async () => {
    if (selecciones.length === 0) {
      alert("No hay decisiones para enviar.");
      return;
    }

    const resumen = selecciones
      .map(
        (s, i) =>
          `${i + 1}. Escenario: ${s.descripcion}\n   → Decisión: ${s.opcionText}`
      )
      .join("\n\n");

    const mensaje = `🧩 Resumen de decisiones del jugador:\n\n${resumen}`;

    try {
      const respuesta = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: mensaje,
          }),
        }
      );

      const data = await respuesta.json();
      if (data.ok) {
        alert("¡Decisiones enviadas con éxito a Telegram!");
        setSelecciones([]); // Limpiar selecciones
        setEscenarioActual("inicio"); // Reiniciar historia
      } else {
        alert("Error al enviar las decisiones a Telegram.");
        console.error(data);
      }
    } catch (error) {
      alert("Error en la conexión con Telegram.");
      console.error(error);
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
                    onClick={enviarResumenTelegram}
                    style={{ backgroundColor: "#4CAF50" }}
                  >
                    Terminar juego y enviar decisiones
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
                escenarioActual === "inicio" ? "escuela" : escenarioFondo
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
