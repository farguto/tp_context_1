import React from "react";
import logo from "../assets/img/logo.jpg";
import camera from "../assets/img/products/camera.jpg";
import headphones from "../assets/img/products/headphones.jpg";
import iphone from "../assets/img/products/iphone.png";




function Inicio() {
  return (
    <div>
      <section id="hero">
        <div class="hero-container">
          <div id="hero-div">
            <h1>Tienda Webydatos</h1>
            <h2>El e-commerce más innovador de Argentina</h2>
            <a class="hero-call" href="#productos">
              <button id="hero-call-button">
                Conocé nuestros productos seleccionados
             
              </button>
            </a>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
             
            }}
          >
            <img id="logo" src={logo} alt="Logo webydatos" />
          </div>
        </div>
      </section>



      <h2 id="productos-destacados">Productos Destacados</h2>

      <section className="productos-destacados" id="productos">
      
       
        <div className="producto" >
     
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

      <footer>
      <ul>
        <li> 🏠 Dirección: Avenida Cabildo 1234</li>
    
        <li> 📱 Teléfono:  (054) 9 11 1111 2222</li>
   
        <li> 📧 Email: consultas@webydatos.com.ar</li>
   

 
      </ul>
  
 
    </footer>



    </div>
  );
}

export default Inicio;
