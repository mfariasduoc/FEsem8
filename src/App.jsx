import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeaderHero from './components/HeaderHero';
import Carousel from './components/Carousel';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [leadText, setLeadText] = useState("Tu destino principal para los últimos lanzamientos, clásicos retro y accesorios gaming.");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  // cargar productos desde el json al iniciar
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setCargando(true);
        setError('');

        const res = await fetch(`${import.meta.env.BASE_URL}data/juegos.json`);

        if (!res.ok) {
          throw new Error('No se pudo cargar el archivo juegos.json');
        }

        const data = await res.json();

        if (!Array.isArray(data)) {
          throw new Error('El formato del archivo juegos.json no es válido');
        }

        setProductos(data);
      } catch (err) {
        console.error("Error al cargar juegos:", err);
        setError('No fue posible cargar los juegos. Intenta nuevamente.');
      } finally {
        setCargando(false);
      }
    };

    cargarProductos();
  }, []);

  // agregar al carrito
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      // evitar agregar nuevamente un producto que ya está en el carrito
      const productoYaExiste = carritoActual.some(
        (item) => item.id === producto.id
      );

      if (productoYaExiste) {
        return carritoActual;
      }

      return [...carritoActual, producto];
    });
  };

  // eliminar un producto del carrito por su index
  const eliminarDelCarrito = (index) => {
    setCarrito((carritoActual) => {
      const nuevoCarrito = carritoActual.filter((_, i) => i !== index);
      return nuevoCarrito;
    });
  };

  // vaciar carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // comprobar si un producto esta en el carrito
  const productoEstaEnCarrito = (productoId) => {
    return carrito.some((item) => item.id === productoId);
  };

  // filtrar productos
  const productosFiltrados = productos.filter(p => 
    p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="bg-dark text-white min-vh-100">
      <Navbar 
        busqueda={busqueda} 
        setBusqueda={setBusqueda} 
        cantidadCarrito={carrito.length}
        setLeadText={setLeadText}
      />
      
      <HeaderHero 
        leadText={leadText} 
        setLeadText={setLeadText} 
      />

      <main>
        <Carousel />

        {cargando ? (
          <section className="container py-5 text-center">
            <div 
              className="spinner-border text-info mb-3" 
              role="status"
            >
              <span className="visually-hidden">
                Cargando...
              </span>
            </div>

            <p className="text-white">
              Cargando catálogo de juegos...
            </p>
          </section>
        ) : error ? (
          <section className="container py-5">
            <div className="alert alert-danger text-center" role="alert">
              {error}
            </div>
          </section>
        ) : productos.length === 0 ? (
          <section className="container py-5 text-center">
            <p className="text-muted">
              No hay productos disponibles actualmente.
            </p>
          </section>
        ) : productosFiltrados.length === 0 ? (
          <section className="container py-5 text-center">
            <div className="alert alert-warning" role="alert">
              No encontramos juegos que coincidan con "{busqueda}".
            </div>
          </section>
        ) : (
          <ProductList 
            productos={productosFiltrados} 
            onAgregarAlCarrito={agregarAlCarrito}
            productoEstaEnCarrito={productoEstaEnCarrito}
          />
        )}

        <Cart 
          carrito={carrito} 
          onEliminar={eliminarDelCarrito} 
          onVaciar={vaciarCarrito} 
        />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
