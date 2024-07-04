import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, remove } from "firebase/database";
import estilo from "../assets/estilos/Carrito.module.css";
import { useContexto } from "../contexto/UsarContexto";
import SaludoUsuario from "../contenedores/SaludoUsuario";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

function Carrito() {
  const [IDpreferencia, setIDpreferencia] = useState(null);
  initMercadoPago("TEST-28a68665-09b2-4a5e-a4be-68527e3f711c", { locale: "es-AR" });
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const { usuario, salirPNG, handleCerrarSesion, CarritoVacioPNG } = useContexto();

  const crearPreferencia = async () => {
    try {
      const response = await axios.post("http://localhost:3000/create_preference", {
        title: "Bananita contenta",
        quantity: 1, // Este debe ser un número
        price: 100,
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await crearPreferencia();
    if (id) {
      setIDpreferencia(id);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;
      const db = getDatabase();
      const carritoRef = ref(db, `usuarios/${uid}/carrito/elementos`);

      get(carritoRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const carritoData = snapshot.val();
            const carritoArray = Object.keys(carritoData).map((key) => ({
              tipo: key,
              ...carritoData[key],
            }));
            setCarrito(carritoArray);

            const totalAmount = carritoArray.reduce((acc, item) => acc + item.cantidad * item.precio, 0);
            setTotal(totalAmount);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  const eliminarItem = (tipo) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;
      const db = getDatabase();
      const itemRef = ref(db, `usuarios/${uid}/carrito/elementos/${tipo}`);

      remove(itemRef)
        .then(() => {
          setCarrito((prevCarrito) => prevCarrito.filter((item) => item.tipo !== tipo));
          const totalAmount = carrito.reduce((acc, item) => (item.tipo !== tipo ? acc + item.cantidad * item.precio : acc), 0);
          setTotal(totalAmount);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!carrito.length) {
    return (
      <>
        <SaludoUsuario usuario={usuario} salirPNG={salirPNG} handleCerrarSesion={handleCerrarSesion} />
        <p>El carrito está vacío</p>
        <img src={CarritoVacioPNG} alt="carritoVacio" />
      </>
    );
  }

  return (
    <>
      <SaludoUsuario usuario={usuario} salirPNG={salirPNG} handleCerrarSesion={handleCerrarSesion} />
      <h3>Items seleccionados</h3>
      <div className={estilo.elementos}>
        {carrito.map((item, index) => (
          <div key={index} className={estilo.carrito_item}>
            <img src={item.img_url} alt={item.tipo} className={estilo.carrito_img} />
            <div className={estilo.carrito_item_datos}>
              <p>
                Tipo: <b>{item.tipo}</b>
              </p>
              <p>
                Precio: <b> ${item.precio}</b>
              </p>
              <p>
                Cantidad: <b>{item.cantidad}</b>
              </p>
              <p>
                Subtotal:<b> ${item.cantidad * item.precio}</b>
              </p>
              <button onClick={() => eliminarItem(item.tipo)} className={estilo.eliminar_btn}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={estilo.carrito_total}>
        <h3>Total de la compra: ${total}</h3>
        <button onClick={handleBuy} className={estilo.comprar_btn}>
          REALIZAR COMPRA
        </button>
        {IDpreferencia && <Wallet initialization={{ preferenceId: IDpreferencia }} />}
      </div>
    </>
  );
}

export default Carrito;
