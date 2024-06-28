import React, { useEffect, useState } from "react";
import estilo from "../assets/estilos/Home.module.css";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { useContexto } from "../contexto/UsarContexto";

function Home() {
  const [productos, setProductos] = useState([]);
  const [usuario, setUsuario] = useState("");
  const { login, salirPNG, handleCerrarSesion } = useContexto();

  useEffect(() => {
    // Función asíncrona para obtener el nombre del usuario
    const obtenerNombreUsuario = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const db = getDatabase();
        console.log("quien es ese hoooombre: ", user);

        const usuarioRef = ref(db, `usuarios/${user.uid}`); // Usar el uid del usuario SALE MALLL

        onValue(
          usuarioRef,
          (snapshot) => {
            const userData = snapshot.val();
            setUsuario(userData.nombre);
          },
          {
            onlyOnce: true, // Escuchar solo una vez para evitar suscripciones múltiples innecesarias
          }
        );
      } else {
        console.log("Usuario no autenticado");
      }
    };

    obtenerNombreUsuario(); // Llamar a la función para obtener el nombre del usuario

    // Código para obtener productos (simplificado)
    const db = getDatabase();

    const productosRef = ref(db, "productos/medias"); // Referencia a la colección de medias en productos
    // Escuchar cambios en los datos
    onValue(productosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convertir el objeto de datos en un arreglo de objetos
        const productosArray = Object.keys(data).map((key) => ({
          tipo: key,
          precio: data[key],
        }));
        setProductos(productosArray);
      } else {
        setProductos([]);
      }
    });

    // Retornar una función de limpieza para detener las escuchas de Firebase
    return () => {
      // Detener la escucha de cambios si es necesario
    };
  }, []);

  return (
    <>
      <h2 className={estilo.saludo}>Hola, {usuario}!</h2>
      <img src={salirPNG} alt="Rayo" className={estilo.imgsalir} onClick={handleCerrarSesion} />
      <div className={estilo.contenedor}>
        <h1>Inventario de Medias</h1>
        <div className={estilo.listaMedias}>
          {productos.map((producto, index) => (
            <div key={index} className={estilo.media}>
              <h3>{producto.tipo}</h3>
              <p>Precio: ${producto.precio}. pesos Arg</p>
              <button>Agregar al Carrito</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
