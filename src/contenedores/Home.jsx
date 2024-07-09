import React, { useEffect, useState } from "react";
import estilo from "../assets/estilos/Home.module.css";
import { getDatabase, ref, onValue } from "firebase/database";
import { useContexto } from "../contexto/UsarContexto";
import SaludoUsuario from "../contenedores/SaludoUsuario";
import ListaProductos from "../contenedores/ListaProductos";

function Home() {
  const [productos, setProductos] = useState([]);
  const { usuario, salirPNG, handleCerrarSesion } = useContexto();
  const db = getDatabase();

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
  }, []);

  return (
    <>
      <SaludoUsuario usuario={usuario} salirPNG={salirPNG} handleCerrarSesion={handleCerrarSesion} />
      <div className={estilo.contenedor}>
        <h1>Inventario de Medias</h1>
        <ListaProductos productos={productos} />
      </div>
    </>
  );
}

export default Home;
