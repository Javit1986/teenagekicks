import React, { useState, useContext } from "react";
import { useContexto } from "../contexto/UsarContexto";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import estilo from "../assets/estilos/Login.module.css";
import AlertaContexto from "../contexto/AlertaContexto";

function Login() {
  const { login, rayo } = useContexto();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mostrarAlerta } = useContext(AlertaContexto); // Obtener la función mostrarAlerta del contexto
  const auth = getAuth();
  const navigate = useNavigate(); // Hook para navegar

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user; // Obtén el usuario del userCredential // Signed in
        login(); // Actualiza el estado de sesión a true
        console.log("epa si entro!");
        console.log("Usuario autenticado:", user.uid);
        mostrarAlerta("success", "¡Inicio de sesión exitoso!");
        setTimeout(() => {
          navigate("/home"); // Navegar a /home después de un breve retraso
        }, 1500); // 1.5 segundos de retraso
      })
      .catch((error) => {
        const errorMessage = error.message;
        //notificacion de error y descripcion
        console.log(errorMessage);
        mostrarAlerta("error", "usuario y/o contraseña inválidos"); // Mostrar alerta de error
      });
  };

  const handleTexto = (e) => {
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={estilo.contenedor}>
      <div className={estilo.titulo_login}>
        <h1>Teenage Kicks Feria </h1> <img src={rayo} alt="Rayo" className={estilo.img} />
      </div>
      <input type="email" onChange={handleTexto} name="email" placeholder="email" />
      <input type="password" onChange={handleTexto} name="password" placeholder="contraseña" />
      <button onClick={handleLogin}> login </button>
      <Link to={"/teenagekicks/registrate"}>
        <button> registrate </button>
      </Link>
    </div>
  );
}

export default Login;
