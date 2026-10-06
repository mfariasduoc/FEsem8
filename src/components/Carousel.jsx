import React from 'react';

export default function Carousel() {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">

            <div
              id="carruselJuegos"
              className="carousel slide shadow-lg rounded overflow-hidden"
              data-bs-ride="carousel"
              data-bs-interval="3000"
            >

              {/* Indicadores */}
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carruselJuegos"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>

                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="8" aria-label="Slide 9"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="9" aria-label="Slide 10"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="10" aria-label="Slide 11"></button>
                <button type="button" data-bs-target="#carruselJuegos" data-bs-slide-to="11" aria-label="Slide 12"></button>
              </div>

              {/* Imágenes del carrusel */}
              <div className="carousel-inner">

                <div className="carousel-item text-center active">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img01.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 1"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img02.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 2"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img03.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 3"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img04.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 4"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img05.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 5"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img06.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 6"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img07.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 7"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img08.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 8"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img09.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 9"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img10.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 10"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img11.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 11"
                  />
                </div>

                <div className="carousel-item text-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/img12.webp`}
                    className="d-block w-100 object-fit-cover"
                    style={{ maxHeight: '350px' }}
                    alt="Imagen promocional 12"
                  />
                </div>

              </div>

              {/* Botón anterior */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carruselJuegos"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>

                <span className="visually-hidden">
                  Anterior
                </span>
              </button>

              {/* Botón siguiente */}
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carruselJuegos"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>

                <span className="visually-hidden">
                  Siguiente
                </span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}