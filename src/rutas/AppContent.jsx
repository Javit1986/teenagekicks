import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../contenedores/Login";
import Home from "../contenedores/Home";
import Registrate from "../contenedores/Registrate";
import Carrito from "../contenedores/Carrito";
import Soy from "../contenedores/Soy";
import { useContexto } from "../contexto/UsarContexto";

const AppContent = () => {
  const { sesion } = useContexto();
  console.log("estado de sesion: ", sesion);

  return (
    <Routes>
      <Route path="/teenagekicks/" element={sesion ? <Navigate to="/teenagekicks/home" /> : <Login />} />
      <Route path="/teenagekicks/login" element={sesion ? <Navigate to="/teenagekicks/home" /> : <Login />} />
      <Route path="/teenagekicks/registrate" element={sesion ? <Navigate to="/teenagekicks/home" /> : <Registrate />} />
      <Route path="/teenagekicks/home" element={sesion ? <Home /> : <Navigate to="/teenagekicks/login" />} />
      <Route path="/teenagekicks/inventario" element={sesion ? <Home /> : <Navigate to="/teenagekicks/login" />} />
      <Route path="/teenagekicks/carrito" element={sesion ? <Carrito /> : <Navigate to="/teenagekicks/login" />} />
      <Route path="/teenagekicks/soy" element={<Soy />} />
    </Routes>
  );
};

export default AppContent;
