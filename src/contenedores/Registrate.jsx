import React, { useState, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import AlertaContexto from "../contexto/AlertaContexto";
import { Link, useNavigate } from "react-router-dom";
import { useContexto } from "../contexto/UsarContexto";
import estilo from "../assets/estilos/Registrate.module.css";

function Registrate() {
  const { login, rayo } = useContexto();
  const { mostrarAlerta } = useContext(AlertaContexto);
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    nombre_usuario: "",
    password: "",
    valida_password: "",
    telefono: "",
    codigo_postal: "",
    localidad: "",
    direccion: {
      calle: "",
      altura: "",
    },
    carrito: {
      elementos: {},
    },
  });

  const handleTexto = (e) => {
    const { name, value } = e.target;
    if (name === "calle" || name === "altura") {
      setFormData((prevData) => ({
        ...prevData,
        direccion: {
          ...prevData.direccion,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleCrear = () => {
    const { nombre, apellido, email, nombre_usuario, password, valida_password, telefono, codigo_postal, localidad, direccion, carrito } = formData;

    if (nombre_usuario === "" || password === "" || email === "") {
      mostrarAlerta("info_complete", "Todos los campos son obligatorios");
      return;
    }

    if (password !== valida_password) {
      mostrarAlerta("error", "Las contraseñas no coinciden");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const db = getDatabase();
        const usuariosRef = ref(db, "usuarios/" + user.uid);

        set(usuariosRef, {
          nombre,
          apellido,
          email,
          nombre_usuario,
          telefono,
          codigo_postal,
          localidad,
          direccion,
          carrito,
        })
          .then(() => {
            mostrarAlerta("success", "Registro exitoso");
            login();
            navigate("/home");
          })
          .catch((error) => {
            const errorMessage = error.message;
            mostrarAlerta("error", errorMessage);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        mostrarAlerta("error", errorMessage);
      });
  };

  return (
    <>
      <img src={rayo} alt="Rayo" className={estilo.img} />
      <h3>Necesitamos tus datos para registrarte</h3>
      <div className={estilo.parrafo}>
        <p>es importante para que las medias</p>
        <p className={estilo.parrafo2}>lleguen a tus patas</p>
      </div>
      <div className="contiene">
        <input type="text" onChange={handleTexto} name="nombre_usuario" placeholder="Nombre de usuario*" value={formData.nombre_usuario} />
        <input type="email" onChange={handleTexto} name="email" placeholder="Email*" value={formData.email} />
        <input type="text" onChange={handleTexto} name="nombre" placeholder="Nombre" value={formData.nombre} />
        <input type="text" onChange={handleTexto} name="apellido" placeholder="Apellido" value={formData.apellido} />
        <input type="telephone" onChange={handleTexto} name="telefono" placeholder="Teléfono" value={formData.telefono} />
        <input type="number" onChange={handleTexto} name="codigo_postal" placeholder="Código Postal" value={formData.codigo_postal} />
        <input type="text" onChange={handleTexto} name="localidad" placeholder="Localidad" value={formData.localidad} />
        <input type="text" onChange={handleTexto} name="calle" placeholder="Calle" value={formData.direccion.calle} />
        <input type="number" onChange={handleTexto} name="altura" placeholder="Altura" value={formData.direccion.altura} />
        <input type="password" onChange={handleTexto} name="password" placeholder="Contraseña*" value={formData.password} />
        <input type="password" onChange={handleTexto} name="valida_password" placeholder="Confirma contraseña*" value={formData.valida_password} />
        <button onClick={handleCrear}>Registrarse</button>
      </div>
    </>
  );
}

export default Registrate;
