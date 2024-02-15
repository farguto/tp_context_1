import React from "react";
import camera from "../assets/img/products/camera.jpg";
import headphones from "../assets/img/products/headphones.jpg";
import iphone from "../assets/img/products/iphone.png";

function Productos() {
  return (
    <div>
      <h2 id="headerproductos">Productos Destacados</h2>

      <section className="productos-destacados" id="productos">
        <div className="producto">
          <img src={camera} alt="Imagen camara" />
          <h3> Cámara de fotos</h3>
          <p> Marca Xerox. Contiene flash.</p>
        </div>

        <div className="producto">
          <img src={headphones} alt="Imagen auriculares" />
          <h3> Auriculares</h3>
          <p> Marca Samsung. Inalámbrico.</p>
        </div>

        <div className="producto">
          <img src={iphone} alt="Imagen Iphone" />
          <h3> Iphone</h3>
          <p> Marca Apple. Contiene estuche.</p>
        </div>
      </section>
    </div>
  );
}

export default Productos;
