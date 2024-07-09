import React, { useState } from "react";
import estilo from "../assets/estilos/ListaProdAdmin.module.css";

function ListaProdAdmin({ productos, actualizarProducto, eliminarProducto }) {
  const [productoEditable, setProductoEditable] = useState(null);
  const [nuevoTipo, setNuevoTipo] = useState("");
  const [nuevaDescripcion, setNuevaDescripcion] = useState("");
  const [nuevoPrecio, setNuevoPrecio] = useState("");
  const [nuevaImgUrl, setNuevaImgUrl] = useState("");

  const handleEditar = (producto) => {
    setProductoEditable(producto.idProd);
    setNuevoTipo(producto.tipo || "");
    setNuevaDescripcion(producto.descripcion || "");
    setNuevoPrecio(producto.precio);
    setNuevaImgUrl(producto.img_url);
  };

  const handleCancelar = () => {
    setProductoEditable(null);
    setNuevoTipo("");
    setNuevaDescripcion("");
    setNuevoPrecio("");
    setNuevaImgUrl("");
  };

  const handleConfirmar = () => {
    actualizarProducto(productoEditable, nuevoTipo, nuevaDescripcion, nuevoPrecio, nuevaImgUrl);
    handleCancelar();
  };

  const handleEliminar = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      eliminarProducto(id);
    }
  };

  return (
    <div className={estilo.listaProdAdmin}>
      {productos.map((producto) => (
        <div key={producto.idProd} className={estilo.producto}>
          {productoEditable === producto.idProd ? (
            <div className={estilo.cajaEditar}>
              <input type="text" value={nuevoTipo} onChange={(e) => setNuevoTipo(e.target.value)} placeholder="Tipo" />
              <input type="text" value={nuevaDescripcion} onChange={(e) => setNuevaDescripcion(e.target.value)} placeholder="Descripción" />
              <input type="number" value={nuevoPrecio} onChange={(e) => setNuevoPrecio(e.target.value)} placeholder="Precio" />
              <input type="text" value={nuevaImgUrl} onChange={(e) => setNuevaImgUrl(e.target.value)} placeholder="URL de la imagen" />
              <button onClick={handleConfirmar}>Confirmar</button>
              <button onClick={handleCancelar}>Cancelar</button>
            </div>
          ) : (
            <div className={estilo.cajaEditar}>
              <img src={producto.img_url} alt={producto.tipo} className={estilo.imagenProducto} />
              <h3>{producto.tipo}</h3>
              <p>Descripción: {producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
              <button onClick={() => handleEditar(producto)}>Editar</button>
              <button onClick={() => handleEliminar(producto.idProd)}>Eliminar</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ListaProdAdmin;
