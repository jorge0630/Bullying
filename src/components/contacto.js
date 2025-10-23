import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ylkrvvd", // 👉 Reemplaza con tu Service ID
        "template_8y1e4xm", // 👉 Reemplaza con tu Template ID
        form.current,
        "0pGISSPHmN_qwf7dY" // 👉 Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          console.log("Correo enviado:", result.text);
          alert("✅ ¡Mensaje enviado con éxito!");
          e.target.reset(); // Limpia el formulario
        },
        (error) => {
          console.error("Error al enviar:", error.text);
          alert("❌ Hubo un error al enviar el mensaje.");
        }
      );
  };

  return (
    <>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <h3 className="fw-bold text-success mb-3 text-center">
          Estamos aquí para escucharte y ayudarte a decir NO al bullying.
        </h3>

        <section id="contacto" className="py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo a la izquierda */}
              <div className="col-md-6 text-center mb-4 mb-md-0">
                <img
                  src="/img/logo.png"
                  alt="Logo"
                  className="img-fluid"
                  style={{ maxWidth: "250px" }}
                />
                <h3 className="fw-bold mt-3 text-primary">¡Contáctanos!</h3>
              </div>

              {/* Formulario con EmailJS */}
              <div className="col-md-6">
                <div className="p-4 border rounded shadow-sm bg-white">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                      <label htmlFor="user_name" className="form-label fw-bold">
                        Nombre
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="user_name"
                        name="user_name"
                        placeholder="Escribe tu nombre"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="user_phone" className="form-label fw-bold">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="user_phone"
                        name="user_phone"
                        placeholder="Tu número de contacto"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label fw-bold">
                        Mensaje
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Escribe tu mensaje"
                        required
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
