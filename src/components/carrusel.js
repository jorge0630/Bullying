import React from "react";


function CollageCarousel() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold text-primary mb-3 text-center">
        Conectados contra el bullying
      </h2>

      <div
        id="collageCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="row g-2">
              <div className="col-6 col-md-3">
                <img
                  src="/img/bullying01.jpg"
                  className="d-block w-100 collage-img"
                  alt="img1"
                />
              </div>
              <div className="col-6 col-md-3">
                <img
                  src="/img/bullying02.jpg"
                  className="d-block w-100 collage-img"
                  alt="img2"
                />
              </div>
              <div className="col-6 col-md-3">
                <img
                  src="/img/bullying03.jpg"
                  className="d-block w-100 collage-img"
                  alt="img3"
                />
              </div>
              <div className="col-6 col-md-3">
                <img
                  src="/img/bullying04.jpg"
                  className="d-block w-100 collage-img"
                  alt="img4"
                />
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="row g-2">
              <div className="col-6 col-md-3">
                <img
                  src="/img/bullying05.jpg"
                  className="d-block w-100 collage-img"
                  alt="img5"
                />
              </div>
              <div className="col-6 col-md-3">
                <img
                  src="/img/bullying06.jpg"
                  className="d-block w-100 collage-img"
                  alt="img6"
                />
              </div>
              <div className="col-6 col-md-3">
                <img
                  src="/img/bullying07.jpg"
                  className="d-block w-100 collage-img"
                  alt="img7"
                />
              </div>
              <div className="col-6 col-md-3">
                <img
                  src="/img/8.jpg"
                  className="d-block w-100 collage-img"
                  alt="img8"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Controles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#collageCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#collageCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}

export default CollageCarousel;
