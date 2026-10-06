import React from 'react';

export default function ProductCard({ producto, onAgregarAlCarrito, estaEnCarrito }) {
  return (
    <div className="col">
      <article className="card h-100 tarjeta bg-custom-card rounded-3 p-3 text-center border-secondary">
        <img 
          src={`${import.meta.env.BASE_URL}${producto.imagen.src}`} 
          alt={producto.imagen.alt} 
          className="card-img-top mx-auto rounded" 
          style={{ maxWidth: '220px', height: '180px', objectFit: 'cover' }} 
        />
        <div className="card-body d-flex flex-column align-items-center p-2">
          <h3 className="card-title h5 fw-bold text-white mt-2">{producto.titulo}</h3>
          <p className="card-text small flex-grow-1 my-2" style={{ color: 'var(--texto-secundario)' }}>
            {producto.descripcion}
          </p>
          
          {/* precios normales y ofertas */}
          <div className="mb-3">
            <span className="text-muted text-decoration-line-through small me-2">{producto.precioNormal}</span>
            <span className="fw-bold text-custom-yellow fs-5">{producto.precio}</span>
          </div>

          <button 
            className={`btn w-100 mt-auto py-2 ${
              estaEnCarrito 
                ? 'btn-success' 
                : 'btn-custom-cyan'
            }`}
            onClick={() => onAgregarAlCarrito(producto)}
            disabled={estaEnCarrito}
          >
            {estaEnCarrito ? 'En el carrito' : 'Agregar al Carrito'}
          </button>
        </div>
      </article>
    </div>
  );
}
