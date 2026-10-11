import React, { useState } from 'react';

export default function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [confirmacion, setConfirmacion] = useState('');

  // Validar los campos antes de simular el envio.
  const manejarEnvio = (evento) => {
    evento.preventDefault();
    setConfirmacion('');

    const nuevosErrores = {};
    const nombreLimpio = nombre.trim();
    const emailLimpio = email.trim();
    const mensajeLimpio = mensaje.trim();

    if (nombreLimpio === '') {
      nuevosErrores.nombre = 'Ingrese su nombre.';
    } else if (nombreLimpio.length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres.';
    }

    if (emailLimpio === '') {
      nuevosErrores.email = 'Ingrese su email.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpio)
    ) {
      nuevosErrores.email = 'Ingrese un correo válido.';
    }

    if (mensajeLimpio === '') {
      nuevosErrores.mensaje = 'Ingrese su mensaje.';
    } else if (mensajeLimpio.length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    setErrores(nuevosErrores);

    // Si hay errores, no se confirma el envio.
    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    setConfirmacion( 'Formulario validado correctamente. El envío es simulado.' );

    setNombre('');
    setEmail('');
    setMensaje('');
    setErrores({});
  };

  // Limpiar el mensaje de confirmacion al editar.
  const limpiarConfirmacion = () => {
    setConfirmacion('');
  };

  return (
    <section id="formulario-contacto" className="py-5 bg-dark" >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="card bg-custom-card border-secondary shadow-lg">
              <div className="card-body p-4 p-md-5">
                <h2 className="fw-bold text-custom-yellow mb-3"> Contáctanos </h2>
                <p className="mb-4" style={{ color: 'var(--texto-secundario)' }} >
                  ¿Tienes alguna duda o consulta? Completa el formulario y nuestro equipo podrá ayudarte.
                </p>

                {confirmacion && (
                  <div className="alert alert-success" role="status" >
                    {confirmacion}
                  </div>
                )}

                <form onSubmit={manejarEnvio} noValidate>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label text-white" >
                      Nombre
                    </label>

                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className={`form-control ${
                        errores.nombre ? 'is-invalid' : ''
                      }`}
                      value={nombre}
                      onChange={(evento) => {
                        setNombre(evento.target.value);
                        limpiarConfirmacion();
                      }}
                      placeholder="Escribe tu nombre"
                      autoComplete="name"
                      required
                      aria-invalid={Boolean(errores.nombre)}
                      aria-describedby={
                        errores.nombre ? 'error-nombre' : undefined
                      }
                    />

                    {errores.nombre && (
                      <div id="error-nombre" className="invalid-feedback" >
                        {errores.nombre}
                      </div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white" >
                      Correo electrónico
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-control ${
                        errores.email ? 'is-invalid' : ''
                      }`}
                      value={email}
                      onChange={(evento) => {
                        setEmail(evento.target.value);
                        limpiarConfirmacion();
                      }}
                      placeholder="nombre@correo.cl"
                      autoComplete="email"
                      required
                      aria-invalid={Boolean(errores.email)}
                      aria-describedby={
                        errores.email ? 'error-email' : undefined
                      }
                    />

                    {errores.email && (
                      <div id="error-email" className="invalid-feedback" >
                        {errores.email}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="mensaje" className="form-label text-white" >
                      Mensaje
                    </label>

                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={5}
                      className={`form-control ${
                        errores.mensaje ? 'is-invalid' : ''
                      }`}
                      value={mensaje}
                      onChange={(evento) => {
                        setMensaje(evento.target.value);
                        limpiarConfirmacion();
                      }}
                      placeholder="Escribe un mensaje de al menos 10 caracteres"
                      required
                      aria-invalid={Boolean(errores.mensaje)}
                      aria-describedby={
                        errores.mensaje
                          ? 'error-mensaje'
                          : undefined
                      }
                    />

                    {errores.mensaje && (
                      <div id="error-mensaje" className="invalid-feedback" >
                        {errores.mensaje}
                      </div>
                    )}
                  </div>

                  <button type="submit" className="btn btn-custom-cyan w-100 fw-bold" >
                    Enviar mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}