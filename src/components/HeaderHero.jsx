import React from 'react';

export default function HeaderHero({ leadText, setLeadText }) {
  const defaultText = "Tu destino principal para los últimos lanzamientos, clásicos retro y accesorios gaming.";

  return (
    <header id="inicio">
      <section className="text-center py-5 border-bottom border-secondary bg-custom-card">
        <div className="container py-3">
          <h1 className="display-4 fw-bold text-custom-yellow">PixelVerse Games</h1>
          <p className="lead col-lg-8 mx-auto" style={{ color: 'var(--texto-secundario)' }}>
            {leadText}
          </p>
          <a type="button" className="btn btn-custom-cyan mt-3" href="#productos">Ver Ofertas Especiales</a>
        </div>
      </section>
    </header>
  );
}