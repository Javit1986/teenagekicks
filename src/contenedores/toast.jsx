// toast.jsx
import React from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Exporta la función notify

export const notify = () =>
  toast.warn("Ingresá tus datos guach!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });

function Notifica() {
  return <ToastContainer />;
}

export default Notifica;
