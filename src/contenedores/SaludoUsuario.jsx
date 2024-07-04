import React from "react";
import estilo from "../assets/estilos/SaludoUsuario.module.css";

const SaludoUsuario = ({ usuario, salirPNG, handleCerrarSesion }) => {
  return (
    <div className={estilo.container}>
      <img src={salirPNG} alt="Rayo" className={estilo.imgsalir} onClick={handleCerrarSesion} />
      <h2 className={estilo.saludo}>Hola, {usuario}!</h2>
    </div>
  );
};

export default SaludoUsuario;
