import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList({ productos, onAgregarAlCarrito, productoEstaEnCarrito }) {
  return (
    <section id="productos" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-custom-yellow display-6">Productos Destacados</h2>
          <p className="lead" style={{ color: 'var(--texto-secundario)' }}>
            Explora nuestras mejores ofertas y los títulos más populares de la temporada.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {productos.length > 0 ? (
            productos.map(producto => (
              <ProductCard 
                key={producto.id} 
                producto={producto} 
                onAgregarAlCarrito={onAgregarAlCarrito}
                estaEnCarrito={productoEstaEnCarrito(producto.id)}
              />
            ))
          ) : (
            <p className="text-warning text-center w-100 py-4">
              No se encontraron productos que coincidan con la búsqueda.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
