import React, { useState, createContext, useContext } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import rayo from "../assets/rayo.png";
import salirPNG from "../assets/salir.png";

const Contexto = createContext();

function UsarContexto({ children }) {
  const estadoinicial = { medias: [], medias_elegidas: [] };
  const [sesion, setSesion] = useState(false);

  const login = () => {
    setSesion(true);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setSesion(false);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleCerrarSesion = () => {
    console.log("seguro que se quiere ir?");

    logout();
  };
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      login();
      // ...
    } else {
      // User is signed out
      // ...
      logout();
    }
  });

  return <Contexto.Provider value={{ estadoinicial, sesion, login, logout, rayo, salirPNG, handleCerrarSesion, onAuthStateChanged }}>{children}</Contexto.Provider>;
}

export default UsarContexto;

export const useContexto = () => useContext(Contexto);
