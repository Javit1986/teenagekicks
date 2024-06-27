import React, { createContext, useState } from "react";
import SweetAlert2 from "../componentes/SweetAlert2/SweetAlert2.jsx";

const AlertaContexto = createContext();

export function UsarAlertaContexto({ children }) {
  const [alertType, setAlertType] = useState(null);
  const [alertError, setAlertError] = useState("");

  const mostrarAlerta = (tipo, mensaje) => {
    setAlertType(tipo);
    setAlertError(mensaje);
    setTimeout(() => {
      setAlertType(null);
      setAlertError("");
    }, 2000); // Restablecer la alerta después de 2 segundos
  };

  return (
    <AlertaContexto.Provider value={{ mostrarAlerta }}>
      {children}
      {alertType && <SweetAlert2 tipo={alertType} mensajito={alertError} />}
    </AlertaContexto.Provider>
  );
}

export default AlertaContexto;
