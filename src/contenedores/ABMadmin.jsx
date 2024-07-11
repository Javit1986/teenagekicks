import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import estilo from "../assets/estilos/Home.module.css";
import { getDatabase, ref, onValue, update, push, remove } from "firebase/database";
import { useContexto } from "../contexto/UsarContexto";
import SaludoUsuario from "../contenedores/SaludoUsuario";
import ListaProdAdmin from "../contenedores/ListaProdAdmin";

function ABMadmin() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    tipo: "",
    descripcion: "",
    precio: "",
    img_url: "",
  });
  const { usuario, uidval, adminUID, salirPNG, handleCerrarSesion } = useContexto();
  const db = getDatabase();
  const navigate = useNavigate();

  useEffect(() => {
    if (uidval === null) {
      return;
    }

    if (uidval !== adminUID) {
      console.log("Usuario no autorizado o no autenticado");
      navigate("/home");
    }
  }, [uidval, navigate]);

  useEffect(() => {
    const productosRef = ref(db, "productos/medias");
    onValue(productosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productosArray = Object.keys(data).map((key) => ({
          idProd: key,
          tipo: data[key].tipo,
          descripcion: data[key].descripcion,
          precio: data[key].precio,
          img_url: data[key].img_url,
        }));
        setProductos(productosArray);
      } else {
        setProductos([]);
      }
    });
  }, [db]);

  const actualizarProducto = (id, nuevoTipo, nuevaDescripcion, nuevoPrecio, nuevaImgUrl) => {
    const productoRef = ref(db, `productos/medias/${id}`);
    update(productoRef, {
      tipo: nuevoTipo,
      descripcion: nuevaDescripcion,
      precio: nuevoPrecio,
      img_url: nuevaImgUrl,
    })
      .then(() => {
        console.log(`Producto ${id} actualizado correctamente`);
      })
      .catch((error) => {
        console.error(`Error al actualizar producto ${id}:`, error);
      });
  };

  const eliminarProducto = (id) => {
    const productoRef = ref(db, `productos/medias/${id}`);
    remove(productoRef)
      .then(() => {
        console.log(`Producto ${id} eliminado correctamente`);
      })
      .catch((error) => {
        console.error(`Error al eliminar producto ${id}:`, error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoProducto((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const agregarProducto = () => {
    if (window.confirm("¿Estás seguro de que deseas agregar este producto?")) {
      const productosRef = ref(db, "productos/medias");
      const nuevoProductoRef = push(productosRef);
      update(nuevoProductoRef, {
        ...nuevoProducto,
        idProd: nuevoProductoRef.key,
      })
        .then(() => {
          console.log(`Producto ${nuevoProducto.tipo} agregado correctamente`);
          setNuevoProducto({
            tipo: "",
            descripcion: "",
            precio: "",
            img_url: "",
          });
        })
        .catch((error) => {
          console.error("Error al agregar producto:", error);
        });
    }
  };

  return (
    <>
      <SaludoUsuario usuario={usuario} salirPNG={salirPNG} handleCerrarSesion={handleCerrarSesion} />
      <div className={estilo.contenedor}>
        <h1>Altas, Bajas y Modificaciones de productos</h1>
        <ListaProdAdmin productos={productos} actualizarProducto={actualizarProducto} eliminarProducto={eliminarProducto} />
        <div className={estilo.formularioNuevoProducto}>
          <h2>Agregar nuevo producto</h2>
          <input type="text" name="tipo" value={nuevoProducto.tipo} onChange={handleInputChange} placeholder="Tipo de producto" />
          <input type="text" name="descripcion" value={nuevoProducto.descripcion} onChange={handleInputChange} placeholder="Descripción" />
          <input type="number" name="precio" value={nuevoProducto.precio} onChange={handleInputChange} placeholder="Precio" />
          <input type="text" name="img_url" value={nuevoProducto.img_url} onChange={handleInputChange} placeholder="URL de la imagen" />
          <button onClick={agregarProducto}>Agregar Producto</button>
        </div>
      </div>
    </>
  );
}

export default ABMadmin;
