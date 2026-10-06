import React from 'react';

export default function Navbar({ busqueda, setBusqueda, cantidadCarrito, setLeadText }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleMouseOverInicio = () => {
    setLeadText("Regresa al inicio para conocer nuestras novedades destacadas.");
  };

  const handleMouseOutInicio = () => {
    setLeadText("Tu destino principal para los últimos lanzamientos, clásicos retro y accesorios gaming.");
  };

  const handleMouseOverProductos = () => {
    setLeadText("Explora nuestro catálogo completo de videojuegos clásicos y modernos.");
  };

  const handleMouseOutProductos = () => {
    setLeadText("Tu destino principal para los últimos lanzamientos, clásicos retro y accesorios gaming.");
  };

  const handleMouseOverContacto = () => {
    setLeadText("Comunícate con nuestro equipo de soporte técnico para consultas.");
  };

  const handleMouseOutContacto = () => {
    setLeadText("Tu destino principal para los últimos lanzamientos, clásicos retro y accesorios gaming.");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom-card sticky-top shadow border-bottom border-secondary">
      <div className="container">
        <a 
          className="navbar-brand d-flex align-items-center gap-2" 
          href="#inicio"
          onMouseOver={handleMouseOverInicio}
          onMouseOut={handleMouseOutInicio}
        >
          <img src="images/logo.png" alt="Logotipo" style={{ height: '40px', width: 'auto' }} />
          <span className="fw-bold text-custom-cyan">PixelVerse Games</span>
        </a>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#menuNavegacion"
          aria-controls="menuNavegacion"
          aria-expanded="false"
          aria-label="Abrir menú de navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNavegacion">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a 
                className="nav-link active text-custom-yellow fw-bold" 
                href="#inicio"
                onMouseOver={handleMouseOverInicio}
                onMouseOut={handleMouseOutInicio}
              >
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                href="#productos"
                onMouseOver={handleMouseOverProductos}
                onMouseOut={handleMouseOutProductos}
              >
                Productos
              </a>
            </li>

            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                href="#seccion-carrito"
              >
                Carrito
              </a>
            </li>

            <li className="nav-item">
              <a 
                className="nav-link text-white" 
                href="#contacto"
                onMouseOver={handleMouseOverContacto}
                onMouseOut={handleMouseOutContacto}
              >
                Contacto
              </a>
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="d-flex me-3" role="search">
            <input 
              className="form-control me-2 bg-dark text-white border-secondary" 
              type="search" 
              placeholder="Buscar juego..." 
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              aria-label="Buscar juegos"
            />

            <button className="btn btn-outline-info" type="submit">
              Buscar
            </button>
          </form>

          <a 
            href="#seccion-carrito" 
            className="btn btn-custom-cyan position-relative mt-2 mt-lg-0"
          >
            Carrito 
            <span className="badge bg-danger rounded-pill">
              {cantidadCarrito}
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
