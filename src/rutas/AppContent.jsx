import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../contenedores/Login";
import Home from "../contenedores/Home";
import Registrate from "../contenedores/Registrate";
import Carrito from "../contenedores/Carrito";
import { useContexto } from "../contexto/UsarContexto";

const AppContent = () => {
  const { sesion } = useContexto();
  console.log("estado de sesion: ", sesion);
  return (
    <Routes>
      <Route path="/" element={sesion ? <Navigate to="/home" /> : <Login />} />
      <Route path="/registrate" element={sesion ? <Navigate to="/home" /> : <Registrate />} />
      <Route path="/home" element={sesion ? <Home /> : <Navigate to="/" />} />
      <Route path="/inventario" element={sesion ? <Home /> : <Navigate to="/" />} />
      <Route path="/carrito" element={sesion ? <Carrito /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default AppContent;
