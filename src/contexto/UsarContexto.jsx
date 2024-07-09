import React, { useState, createContext, useContext, useEffect } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get, onValue } from "firebase/database";
import rayo from "../assets/rayo.png";
import salirPNG from "../assets/salir.png";
import CarritoVacioPNG from "../assets/carritovacio.png";

const Contexto = createContext();

function UsarContexto({ children }) {
  const [sesion, setSesion] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [productos, setProductos] = useState({});
  const [uid, setUid] = useState(null);
  const [uidval, setUidval] = useState(null);
  const adminUID = "loLuvWeoD2T2keAD6loKV2pKPng2"; // UID del administrador

  const login = (uid) => {
    setSesion(true);
    setUid(uid);
    setUidval(uid); // Establecer el uid aquí
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setSesion(false);
        setUid(null);
        setUidval(null); // Limpiar el uidval al cerrar sesión
        setUsuario(""); // Limpiar el nombre del usuario al cerrar sesión
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleCerrarSesion = () => {
    console.log("seguro que se quiere ir?");
    logout();
  };

  const obtenerNombreUsuario = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const db = getDatabase();
      const usuarioRef = ref(db, `usuarios/${user.uid}`);
      onValue(
        usuarioRef,
        (snapshot) => {
          const userData = snapshot.val();
          console.log("CONTEXTO SACA NOMBRE: userData:", userData);
          setUsuario(userData.nombre);
        },
        { onlyOnce: true }
      );
    } else {
      console.log("CONTEXTO: Usuario no autenticado");
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        login(user.uid);
        obtenerNombreUsuario(); // Obtener el nombre del usuario cuando inicie sesión
      } else {
        logout();
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const db = getDatabase();
    const productosRef = ref(db, "productos");
    get(productosRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProductos(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <Contexto.Provider value={{ sesion, login, logout, rayo, salirPNG, CarritoVacioPNG, handleCerrarSesion, productos, usuario, uidval, adminUID }}>{children}</Contexto.Provider>;
}

export default UsarContexto;

export const useContexto = () => useContext(Contexto);
