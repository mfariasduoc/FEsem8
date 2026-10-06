import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-custom-card text-white py-5 border-top border-secondary">
      <div className="container">
        <section id="contacto" className="text-center text-md-start">
          <div className="row gy-4">
            <div className="col-md-6">
              <h2 className="h4 fw-bold text-custom-yellow mb-3">Contacto e Información</h2>
              <p className="mb-1" style={{ color: 'var(--texto-secundario)' }}><strong>Dirección:</strong> Calle libertad s/n, San Antonio, Valparaíso</p>
              <p className="mb-0" style={{ color: 'var(--texto-secundario)' }}><strong>Email:</strong> soporte@pixelversegames.cl</p>
            </div>

            <div className="col-md-6 text-md-end">
              <p className="fw-bold mb-2">Síguenos en nuestras redes sociales:</p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm">Twitter</a></li>
                <li className="list-inline-item"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-info btn-sm">Instagram</a></li>
              </ul>
            </div>
          </div>

          <hr className="my-4 border-secondary" />

          <div className="text-center">
            <p className="small mb-0" style={{ color: 'var(--texto-secundario)' }}>&copy; 2026 PixelVerse Games. Todos los derechos reservados.</p>
          </div>
        </section>
      </div>
    </footer>
  );
}