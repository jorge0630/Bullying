import React from "react";

function MisionVision() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row text-center">
          
          {/* Misión */}
          <div className="col-md-6 mb-4">
            <div className="p-4 h-100 border rounded shadow-sm bg-white">
              <h3 className="fw-bold text-success mb-3">Misión</h3>
              <p className="text-muted">
              Brindar a estudiantes, docentes y familias una herramienta interactiva y didáctica que, 
              mediante juegos y retos, fomente la prevención y detección del bullying, potencie las habilidades 
              sociales y contribuya a construir entornos escolares seguros, inclusivos y solidarios.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="col-md-6 mb-4">
            <div className="p-4 h-100 border rounded shadow-sm bg-white">
              <h3 className="fw-bold text-primary mb-3">Visión</h3>
              <p className="text-muted">
                Ser una plataforma que fomente comunidades escolares libres de bullying, fortaleciendo la empatía, 
                el respeto y la sana convivencia a través de la innovación educativa y la gamificación.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MisionVision;
