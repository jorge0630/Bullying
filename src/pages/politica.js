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
          <em>Última actualización: octubre de 2025</em>
        </p>

        <div style={{ textAlign: "justify", lineHeight: "1.7" }}>
          <p>
            En <strong>Conectados contra el Bullying</strong> cuidamos tu
            información con el mismo respeto y compromiso con el que trabajamos
            por una convivencia sana y sin violencia. Esta política explica, de
            forma sencilla, cómo protegemos los datos de quienes usan nuestra
            página web o participan en las actividades del proyecto.
          </p>

          <h5 className="mt-4 fw-bold">1. ¿Para qué usamos esta página?</h5>
          <p>Nuestra página fue creada con un propósito educativo:</p>
          <ul>
            <li>Promover el respeto y la sana convivencia.</li>
            <li>Brindar materiales y herramientas para prevenir el bullying.</li>
            <li>
              Acompañar y orientar a quienes necesiten apoyo o deseen reportar
              una situación.
            </li>
          </ul>
          <p>
            Todo lo que hacemos tiene fines pedagógicos y de orientación, nunca
            comerciales.
          </p>

          <h5 className="mt-4 fw-bold">2. ¿Qué información pedimos?</h5>
          <p>Solo pedimos información básica y necesaria, como:</p>
          <ul>
            <li>Nombre o seudónimo (si prefieres mantenerte anónimo).</li>
            <li>Tu rol (por ejemplo: estudiante, docente o acudiente).</li>
            <li>Numero de contacto</li>
            <li>
              En casos de reporte, datos mínimos que ayuden al equipo escolar a
              brindar apoyo y hacer seguimiento de forma respetuosa y
              confidencial.
            </li>
          </ul>

          <h5 className="mt-4 fw-bold">3. ¿Cómo cuidamos tu información?</h5>
          <p>Tu información está segura con nosotros:</p>
          <ul>
            <li>No compartimos tus datos con personas ajenas al proyecto.</li>
            <li>
              Solo el equipo autorizado del colegio puede acceder a la
              información necesaria para acompañar los casos.
            </li>
            <li>
              Usamos medidas digitales y educativas para mantener tu privacidad
              protegida.
            </li>
          </ul>

          <h5 className="mt-4 fw-bold">4. ¿Para qué usamos la información?</h5>
          <p>Usamos los datos únicamente para:</p>
          <ul>
            <li>Promover actividades y recursos sobre convivencia escolar.</li>
            <li>
              Dar seguimiento a casos reportados con total confidencialidad y
              empatía.
            </li>
            <li>Mejorar el contenido y la participación en el proyecto.</li>
            <li>
              Elaborar informes generales para evaluar avances (sin incluir
              nombres ni datos personales).
            </li>
          </ul>

          <h5 className="mt-4 fw-bold">5. Tus derechos</h5>
          <p>Recuerda que tú siempre tienes derecho a:</p>
          <ul>
            <li>Saber qué información guardamos.</li>
            <li>Pedir que se corrija o elimine.</li>
            <li>Retirar tu consentimiento cuando lo desees.</li>
          </ul>
          <p>
            Puedes hacerlo escribiendo al correo: <strong>conectadoscontraelbullying@hotmail.com</strong>
          </p>

          <h5 className="mt-4 fw-bold">6. Quién cuida tus datos</h5>
          <p>
            Los datos están a cargo del equipo del proyecto{" "}
            <strong>Conectados contra el Bullying</strong>, bajo la orientación
            de <strong>[nombre del colegio o institución]</strong>.
          </p>
          <p>
            Nos comprometemos a cuidar la información con responsabilidad y
            cariño.
          </p>

          <h5 className="mt-4 fw-bold">7. Cambios en esta política</h5>
          <p>
            Podemos actualizar esta política cuando sea necesario. Si hacemos
            cambios importantes, lo avisaremos en la página para que todos estén
            informados.
          </p>

          <h5 className="mt-4 fw-bold">
            8. Tu confianza es lo más importante
          </h5>
          <p>
            Al usar la página de <strong>Conectados contra el Bullying</strong>,
            aceptas esta Política de Privacidad y nos ayudas a seguir
            construyendo una comunidad más respetuosa, segura y solidaria.
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