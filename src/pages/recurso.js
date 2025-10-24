import { Link } from "react-router-dom";

function Recursos() {
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
          maxWidth: "1000px",
          width: "100%",
          backgroundColor: "white",
          borderRadius: "16px",
        }}
      >
        <h2 className="fw-bold text-center mb-4 text-primary">
          Recursos Educativos – Explora, aprende y comparte
        </h2>

        <p className="text-muted text-center mb-5">
          <em>
            Explora materiales diseñados para aprender, reflexionar y actuar
            contra el bullying.
          </em>
        </p>

        {/* =========================
            SECCIÓN DE VIDEOS
        ========================== */}
        <section className="mb-5">
          <h4 className="fw-bold text-primary mb-3 text-center">
            Videos Educativos
          </h4>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/Sy6qaHjxgZk"
                  title="Identificar y prevenir el bullying"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="fw-semibold mt-2 text-center">
                Identificar y prevenir el bullying
              </p>
            </div>

            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/ZjZHxOEv1p8"
                  title="Cómo actuar frente al acoso escolar"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="fw-semibold mt-2 text-center">
                Cómo actuar frente al acoso escolar
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            SECCIÓN DE DOCUMENTOS
        ========================== */}
        <section className="mb-5">
          <h4 className="fw-bold text-primary mb-3 text-center">
            Documentos y Guías
          </h4>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="border rounded p-3 h-100">
                <h5 className="fw-semibold">Guía para docentes.</h5>
                <p className="text-muted mb-3">
                  Material para identificar y atender casos de bullying en el
                  aula.
                </p>
                <a
                href="/img/infografiaProfe.jpg"
                download
                className="btn btn-outline-primary w-100 fw-bold"
                >
                    Descargar PDF
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="border rounded p-3 h-100">
                <h5 className="fw-semibold">Infografía para estudiantes.</h5>
                <p className="text-muted mb-3">
                  Consejos prácticos para promover el respeto y la empatía entre
                  compañeros.
                </p>
                <a
                href="/img/infografia.jpg"
                download
                className="btn btn-outline-primary w-100 fw-bold"
                >
                Descargar PDF
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="border rounded p-3 h-100">
                <h5 className="fw-semibold">La empatía se enseña con el ejemplo.</h5>
                <p className="text-muted mb-3">
                    Ponerse en el lugar del otro es el primer paso para cambiar el mundo.
                </p>
                <a
                href="/img/infografiaEmpatico.jpg"
                download
                className="btn btn-outline-primary w-100 fw-bold"
                >
                Descargar PDF
                </a>
              </div>
            </div>
          </div>

          
        </section>

        {/* =========================
            SECCIÓN DE ENLACES
        ========================== */}
        <section className="mb-4">
          <h4 className="fw-bold text-primary mb-3 text-center">
            🌐 Enlaces Útiles
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <a
                href="https://www.unesco.org/es/articles/violencia-y-acoso-escolar-la-unesco-reclama-una-mejor-proteccion-de-los-estudiantes "
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary fw-semibold"
              >
                UNESCO – Campañas contra la violencia escolar
              </a>
            </li>
            <li className="list-group-item">
              <a
                href="https://share.google/iAFRh09bzIYd3QjLx "
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-primary fw-semibold"
              >
                UNICEF – Recursos pedagógicos
              </a>
            </li>
          </ul>
        </section>

        {/* BOTÓN DE REGRESO */}
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-outline-primary px-4 fw-bold">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Recursos;
