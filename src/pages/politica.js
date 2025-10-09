import React from "react";
import { Link } from "react-router-dom";

function Politica() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "50px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "800px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "16px",
        }}
      >
        <h2 className="fw-bold text-center mb-4 text-primary">
          Política de Privacidad – Conectados contra el Bullying
        </h2>
        <p className="text-muted text-center mb-4">
          <em>Última actualización: septiembre de 2025</em>
        </p>

        <div style={{ textAlign: "justify", lineHeight: "1.7" }}>
          <p>
            En <strong>Conectados contra el Bullying</strong>, valoramos y
            respetamos la privacidad de nuestros usuarios. Este documento
            explica cómo se maneja la información dentro de nuestro sitio web y
            de la experiencia interactiva tipo <em>“juego de decisiones”</em>,
            cuyo propósito es educativo y de sensibilización social.
          </p>

          <h5 className="mt-4 fw-bold">1. Finalidad del sitio</h5>
          <p>
            El sitio <strong>Conectados contra el Bullying</strong> busca
            promover la reflexión y el aprendizaje a través de un entorno
            digital interactivo donde los usuarios pueden tomar decisiones y
            conocer las consecuencias de diferentes situaciones. Nuestro
            objetivo es concientizar sobre temas sociales y educativos, sin
            recopilar información personal sensible.
          </p>

          <h5 className="mt-4 fw-bold">2. Información que recopilamos</h5>
          <p>El uso del sitio y del juego puede generar datos técnicos mínimos, como:</p>
          <ul>
            <li>Tipo de dispositivo y navegador utilizado.</li>
            <li>
              Información anónima sobre navegación (por ejemplo, tiempo de uso o
              secciones visitadas).
            </li>
            <li>
              Opciones seleccionadas dentro del juego, solo con fines
              estadísticos o de mejora.
            </li>
          </ul>
          <p>
            <strong>No se recopilan</strong> nombres, correos electrónicos ni
            datos personales identificables.
          </p>

          <h5 className="mt-4 fw-bold">3. Uso de la información</h5>
          <p>La información obtenida se usa exclusivamente para:</p>
          <ul>
            <li>Mejorar la experiencia educativa.</li>
            <li>Analizar el nivel de interacción con el juego.</li>
            <li>Optimizar el rendimiento técnico del sitio.</li>
          </ul>
          <p>
            En ningún caso se comparte, vende o cede esta información a
            terceros.
          </p>

          <h5 className="mt-4 fw-bold">4. Cookies y tecnologías similares</h5>
          <p>
            El sitio puede usar cookies esenciales para el correcto
            funcionamiento del juego (por ejemplo, para recordar el progreso
            temporal del usuario). Estas cookies no almacenan datos personales y
            pueden eliminarse desde la configuración del navegador.
          </p>

          <h5 className="mt-4 fw-bold">5. Seguridad</h5>
          <p>
            Implementamos medidas razonables para proteger la información
            técnica y mantener la integridad del sitio. Sin embargo, recuerda
            que ningún sistema digital es completamente infalible.
          </p>

          <h5 className="mt-4 fw-bold">6. Menores de edad</h5>
          <p>
            El contenido de <strong>Conectados contra el Bullying</strong> puede
            ser utilizado por personas menores de edad con supervisión educativa
            o parental. No solicitamos ni almacenamos información de menores.
          </p>

          <h5 className="mt-4 fw-bold">7. Enlaces externos</h5>
          <p>
            En caso de que el sitio incluya enlaces a páginas externas,{" "}
            <strong>Conectados contra el Bullying</strong> no se hace
            responsable de las prácticas de privacidad de dichos sitios.
            Recomendamos revisar sus respectivas políticas.
          </p>
        </div>

        <div className="text-center mt-5">
          <Link to="/" className="btn btn-outline-primary px-4 fw-bold">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Politica;
