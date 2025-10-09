import React from "react";


function ContactSection() {
  return (
    <>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <h3 className="fw-bold text-success mb-3 text-center">
          Estamos aquí para escucharte y ayudarte a decir NO al bullying.
        </h3>
      

      <section
        id="contacto"
        className="py-5"
      >


        <div className="container">
          <div className="row align-items-center">
            {/* Logo a la izquierda */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <img
                src="/img/ejemploLogo.png"
                alt="Logo"
                className="img-fluid"
                style={{ maxWidth: "250px" }}
              />
              <h3 className="fw-bold mt-3 text-primary">¡Contáctanos!</h3>
            </div>

            {/* Formulario con borde */}
            <div className="col-md-6">
              <div className="p-4 border rounded shadow-sm bg-white">
                <form>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label fw-bold">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Escribe tu nombre"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label fw-bold">
                      Telefono
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="nombre"
                      placeholder="Escribe tu nombre"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label fw-bold">
                      Mensaje
                    </label>
                    <textarea
                      className="form-control"
                      id="mensaje"
                      rows="4"
                      placeholder="Escribe tu mensaje"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 fw-bold">
                    <i className="bi bi-send-fill me-2"></i> Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default ContactSection;
