import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../contenedores/Login";
import Home from "../contenedores/Home";
import Registrate from "../contenedores/Registrate";
import Carrito from "../contenedores/Carrito";
import Soy from "../contenedores/Soy";
import ABMadmin from "../contenedores/ABMadmin";
import { useContexto } from "../contexto/UsarContexto";

const AppContent = () => {
  const { sesion } = useContexto();
  console.log("estado de sesion: ", sesion);

  return (
    <Routes>
      <Route path="/" element={sesion ? <Navigate to="/home" /> : <Login />} />
      <Route path="/login" element={sesion ? <Navigate to="/home" /> : <Login />} />
      <Route path="/registrate" element={sesion ? <Navigate to="/home" /> : <Registrate />} />
      <Route path="/home" element={sesion ? <Home /> : <Navigate to="/login" />} />
      <Route path="/inventario" element={sesion ? <Home /> : <Navigate to="/login" />} />
      <Route path="/carrito" element={sesion ? <Carrito /> : <Navigate to="/login" />} />
      <Route path="/soy" element={<Soy />} />
      <Route path="/ABMadmin" element={sesion ? <ABMadmin /> : <Navigate to="/login" />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppContent;
