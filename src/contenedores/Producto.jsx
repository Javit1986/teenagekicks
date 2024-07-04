import React, { useEffect, useState } from "react";
import estilo from "../assets/estilos/Producto.module.css";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update, get, set } from "firebase/database";

function Producto({ producto }) {
  const [cantidadEnCarrito, setCantidadEnCarrito] = useState(0);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getDatabase();

    if (user) {
      const usuarioRefCarrito = ref(db, `usuarios/${user.uid}/carrito/elementos/${producto.tipo}`);

      get(usuarioRefCarrito)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setCantidadEnCarrito(snapshot.val().cantidad || 0);
          }
        })
        .catch((error) => {
          console.error("Error al obtener la cantidad del producto en el carrito:", error.message);
        });
    }
  }, [producto.tipo]);

  const ponerEnCarro = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getDatabase();

    if (user) {
      const usuarioRefCarrito = ref(db, `usuarios/${user.uid}/carrito/elementos/${producto.tipo}`);

      try {
        const snapshot = await get(usuarioRefCarrito);
        if (snapshot.exists()) {
          const nuevoCantidad = (snapshot.val().cantidad || 0) + 1;
          await update(usuarioRefCarrito, { cantidad: nuevoCantidad });
          setCantidadEnCarrito(nuevoCantidad);
          console.log("Cantidad actualizada en el carrito");
        } else {
          const nuevoProducto = { ...producto, cantidad: 1 };
          await set(usuarioRefCarrito, nuevoProducto);
          setCantidadEnCarrito(1);
          console.log("Producto añadido al carrito correctamente");
        }
      } catch (error) {
        console.error("Error al acceder al producto en el carrito:", error.message);
      }
    } else {
      console.log("Usuario no autenticado, no se puede agregar al carrito");
    }
  };

  return (
    <div className={estilo.media}>
      <img src={producto.img_url} alt={producto.tipo} className={estilo.imagenProducto} />
      <h3>{producto.tipo}</h3>
      <p>Precio: ${producto.precio} pesos Arg</p>
      <button onClick={ponerEnCarro}>Agregar al Carrito{cantidadEnCarrito > 0 ? ` (${cantidadEnCarrito})` : ""}</button>
    </div>
  );
}

export default Producto;
