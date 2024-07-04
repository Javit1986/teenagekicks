import React from "react";
import estilo from "../assets/estilos/Soy.module.css";
import { useContexto } from "../contexto/UsarContexto";
import SaludoUsuario from "../contenedores/SaludoUsuario";
import logo from "../assets/logo.png";

function Soy() {
  const { usuario, salirPNG, handleCerrarSesion } = useContexto();

  return (
    <>
      <SaludoUsuario usuario={usuario} salirPNG={salirPNG} handleCerrarSesion={handleCerrarSesion} />
      <div className={estilo.texto}>
        <h2 className={estilo.marca}>TEENAGE KICK</h2>
        <p>
          Quiénes Somos - Bienvenidos a TEENAGE KICK, donde tus patas se regocijan en cada par de nuestras de medias. Desde 2018, nos hemos dedicado a traer a nuestros clientes una selección única y original de medias con motivos locos, rockeros y bizarros que se adaptan a todos los gustos. Con más de 3749 seguidores y una creciente comunidad de clientes satisfechos, TEENAGE KICK es tu destino definitivo para medias que destacan. Nos especializamos en ventas al por menor, ofreciendo un catálogo variado que seguramente te sorprenderá y encantará. Nuestro compromiso es hacer llegar nuestras
          creativas medias a tu puerta de la manera más económica posible, con opciones de pago seguras a través de Mercado Pago y transferencias bancarias. Navega por nuestro catálogo y encuentra el par perfecto que te hará destacar. ¡Déjate llevar por el estilo único de TEENAGE KICK!
        </p>
      </div>
      <div className={estilo.logoFixed}>
        <img src={logo} alt="Logo" className={estilo.logoFixed} />
      </div>
    </>
  );
}

export default Soy;
