import React from "react";
import Producto from "./Producto";
import { useContexto } from "../contexto/UsarContexto";
import estilo from "../assets/estilos/ListaProductos.module.css";

function ListaProductos({ productos }) {
  const { agregarAlCarrito } = useContexto();

  return (
    <div className={estilo.listaMedias}>
      {productos.map((producto, index) => (
        <Producto key={index} producto={producto} agregarAlCarrito={agregarAlCarrito} />
      ))}
    </div>
  );
}

export default ListaProductos;
