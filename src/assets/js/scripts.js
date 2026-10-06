// Arreglo global para almacenar los productos cargados y el carrito de compras
let productosGlobales = [];
let carrito = [];

// funciones para el manejo del carrito

// funcion para agregar un producto al carrito de compras
const agregarAlCarrito = (idProducto) => {
  const producto = productosGlobales.find(p => p.id === idProducto);
  if (producto) {
    carrito.push(producto);
    actualizarResumenCarrito();
  }
};

// funcion para convertir string de precio $50.000 a numero entero 50000
const parsearPrecio = (precioStr) => {
  return parseInt(precioStr.replace(/[^0-9]/g, '')) || 0;
};

// funcion encargada de renderizar y actualizar el carrito en el DOM
const actualizarResumenCarrito = () => {
  const listaCarrito = document.getElementById("lista-carrito");
  const contadorCarrito = document.getElementById("contador-carrito");
  const totalCarrito = document.getElementById("total-carrito");
  const carritoVacioMsg = document.getElementById("carrito-vacio");

  if (!listaCarrito || !contadorCarrito || !totalCarrito) return;

  // limpiar contenido previo de la lista
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    if (carritoVacioMsg) carritoVacioMsg.style.display = "block";
    totalCarrito.innerText = "$0";
    contadorCarrito.innerText = "0";
    return;
  }

  if (carritoVacioMsg) carritoVacioMsg.style.display = "none";

  let totalAcumulado = 0;

  // recorrer los elementos del carrito e inyectarlos al DOM
  carrito.forEach((item, index) => {
    const precioNum = parsearPrecio(item.precio);
    totalAcumulado += precioNum;

    const li = document.createElement("li");
    li.className = "list-group-item bg-transparent text-white d-flex justify-content-between align-items-center border-secondary px-0";
    li.innerHTML = `
      <div>
        <strong class="text-custom-yellow">${item.titulo}</strong>
        <br><span class="text-custom-yellow fw-bold small">${item.precio}</small>
      </div>
      <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    listaCarrito.appendChild(li);
  });

  // actualizar contasdor y totales
  contadorCarrito.innerText = carrito.length;
  totalCarrito.innerText = `$${totalAcumulado.toLocaleString('es-CL')}`;
};

// funcion para eliminar un elemento segun su indice
window.eliminarDelCarrito = (index) => {
  carrito.splice(index, 1);
  actualizarResumenCarrito();
};

// funcion para vaciar el carrito
const vaciarCarrito = () => {
  carrito = [];
  actualizarResumenCarrito();
};

// funcion para cargar las tarjetas de productos
const mostrarProductos = (productos) => {
  const rowProductos = document.getElementById("contenedor-productos");
  if (!rowProductos) return;

  rowProductos.innerHTML = "";

  if (productos.length === 0) {
    rowProductos.innerHTML = '<p class="text-warning text-center w-100 py-4">No se encontraron productos que coincidan con la búsqueda.</p>';
    return;
  }

  productos.forEach(producto => {
    const tarjeta = `
      <div class="col">
        <article class="card h-100 tarjeta bg-custom-card rounded-3 p-3 text-center">
          <img src="${producto.imagen.src}" alt="${producto.imagen.alt}" class="card-img-top mx-auto rounded" style="max-width: 220px; height: 180px; object-fit: cover;">
          <div class="card-body d-flex flex-column align-items-center p-2">
            <h3 class="card-title h5 fw-bold text-white mt-2">${producto.titulo}</h3>
            <p class="card-text small flex-grow-1 my-2" style="color: var(--texto-secundario);">${producto.descripcion}</p>
            <p class="card-text fw-bold mb-3" style="color: var(--texto-secundario);">Precio: <span class="text-custom-yellow">${producto.precio}</span></p>
            <!-- Botón interactivo con evento click para agregar al carrito -->
            <button class="btn btn-custom-cyan w-100 mt-auto py-2 btn-agregar" data-id="${producto.id}">
              Agregar al Carrito
            </button>
          </div>
        </article>
      </div>
    `;
    rowProductos.innerHTML += tarjeta;
  });

  // funcion del evento click para los botones agregar al carrito
  const botonesAgregar = rowProductos.querySelectorAll(".btn-agregar");
  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      agregarAlCarrito(id);
    });
  });
};

// funcion para cargar productos mediante Fetch API
const cargarProductos = () => {
  const rowProductos = document.getElementById("contenedor-productos");
  if (!rowProductos) return;

  rowProductos.innerHTML = '<p class="text-white text-center w-100">Cargando productos...</p>';

  fetch("data/juegos.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error en la red al intentar cargar el archivo JSON de juegos");
      }
      return response.json();
    })
    .then(data => {
      productosGlobales = data; // almacena datos globalmente
      mostrarProductos(productosGlobales);
    })
    .catch(error => {
      // manejo de errores con catch
      rowProductos.innerHTML = `
        <div class="alert alert-danger text-center w-100" role="alert">
          Ocurrió un error al intentar cargar el catálogo de productos. Por favor, reintenta más tarde.
        </div>`;
      console.error("Error al cargar los productos:", error);
    });
};


document.addEventListener("DOMContentLoaded", function() {

  // eventos mouseover y mouseout para la barra de navegacion
  const menuInicio = document.getElementById("menu_inicio");
  const menuProductos = document.getElementById("menu_productos");
  const menuContacto = document.getElementById("menu_contacto");
  const leadInfo = document.getElementById("lead_info");
  const leadDefault = "Tu destino principal para los últimos lanzamientos, clásicos retro y accesorios gaming.";

  if (menuInicio && leadInfo) {
    menuInicio.addEventListener("mouseover", () => {
      leadInfo.innerHTML = "Regresa al inicio para conocer nuestras novedades destacadas.";
    });
    menuInicio.addEventListener("mouseout", () => {
      leadInfo.innerHTML = leadDefault;
    });
  }

  if (menuProductos && leadInfo) {
    menuProductos.addEventListener("mouseover", () => {
      leadInfo.innerHTML = "Explora nuestro catálogo completo de videojuegos clásicos y modernos.";
    });
    menuProductos.addEventListener("mouseout", () => {
      leadInfo.innerHTML = leadDefault;
    });
  }

  if (menuContacto && leadInfo) {
    menuContacto.addEventListener("mouseover", () => {
      leadInfo.innerHTML = "Comunícate con nuestro equipo de soporte técnico para consultas.";
    });
    menuContacto.addEventListener("mouseout", () => {
      leadInfo.innerHTML = leadDefault;
    });
  }

  // evento submit, manejo del formulario de busqueda de productos
  const formBusqueda = document.getElementById("form-busqueda");
  const inputBusqueda = document.getElementById("input-busqueda");

  if (formBusqueda && inputBusqueda) {
    formBusqueda.addEventListener("submit", (e) => {
      e.preventDefault(); // previene la recarga de pagina
      const termino = inputBusqueda.value.toLowerCase().trim();
      
      // filtrado
      const resultados = productosGlobales.filter(producto => 
        producto.titulo.toLowerCase().includes(termino) ||
        producto.descripcion.toLowerCase().includes(termino)
      );

      mostrarProductos(resultados);
    });
  }

  // evento click para vaciar el carrito de compras
  const btnVaciar = document.getElementById("btn-vaciar-carrito");
  if (btnVaciar) {
    btnVaciar.addEventListener("click", vaciarCarrito);
  }

  // carga inicial de los productos mediante la API Fetch
  cargarProductos();
});