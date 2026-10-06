import React from 'react';

export default function Cart({ carrito, onEliminar, onVaciar }) {
  // funcion para sumar los precios
  const parsearPrecio = (precioStr) => {
    return parseInt(precioStr.replace(/[^0-9]/g, '')) || 0;
  };

  const totalAcumulado = carrito.reduce((acc, item) => acc + parsearPrecio(item.precio), 0);

  // contador de productos del carrito
  const cantidadProductos = carrito.length;

  return (
    <section id="seccion-carrito" className="py-5 bg-custom-card border-top border-secondary">
      <div className="container">
        <h2 className="fw-bold text-custom-yellow mb-4 text-center">Resumen de tu Carrito</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="p-3 bg-dark rounded border border-secondary">
              {carrito.length === 0 ? (
                <p className="text-center text-muted mb-0">Tu carrito está vacío.</p>
              ) : (
                <>
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom border-secondary">
                    <span className="text-white fw-bold">
                      {cantidadProductos} {cantidadProductos === 1 ? 'producto' : 'productos'}
                    </span>

                    <span className="text-custom-yellow fw-bold">
                      {cantidadProductos === 1 
                        ? '1 producto seleccionado' 
                        : `${cantidadProductos} productos seleccionados`
                      }
                    </span>
                  </div>

                  <ul className="list-group list-group-flush mb-3">
                    {carrito.map((item, index) => (
                      <li key={index} className="list-group-item bg-transparent text-white d-flex justify-content-between align-items-center border-secondary px-0">
                        <div>
                          <strong className="text-custom-yellow">{item.titulo}</strong>
                          <br />
                          <span className="text-custom-yellow fw-bold small">{item.precio}</span>
                        </div>
                        <button 
                          className="btn btn-sm btn-outline-danger" 
                          onClick={() => onEliminar(index)}
                        > Eliminar
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex justify-content-between align-items-center pt-2 border-top border-secondary">
                    <span className="fw-bold text-white fs-5">Total:</span>
                    <span className="fw-bold text-custom-yellow fs-5">
                      ${totalAcumulado.toLocaleString('es-CL')}
                    </span>
                  </div>

                  <button className="btn btn-danger btn-sm mt-3" onClick={onVaciar}>
                    Vaciar Carrito
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
