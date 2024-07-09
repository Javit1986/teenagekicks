import Swal from "sweetalert2";

const SweetAlert2 = ({ tipo, mensajito }) => {
  const showAlert = () => {
    switch (tipo) {
      case "error":
        if (mensajito === "Firebase: Error (auth/email-already-in-use).") {
          Swal.fire({
            icon: "error",
            title: "E-mail ya está en uso",
            html: `colgade!`,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Uh! Error...",
            html: `Ha ocurrido un error: ${mensajito}`,
          });
        }
        break;
      case "success":
        Swal.fire({
          icon: "success",
          title: "¡Bienvenido!",
          /*      html: `${mensajito} <br/><p>safaste que por ahora no validamos casilla de correo</p>`, */
        });
        break;
      case "info":
        Swal.fire({
          icon: "info",
          title: "Éxito",
          html: `<p>Operación exitosa</p>`,
        });
        break;
      case "info_complete":
        Swal.fire({
          icon: "info",
          title: "Completá!",
          html: `<p>${mensajito}</p>`,
        });
        break;
      default:
        break;
    }
  };

  // Llama a la función showAlert al renderizar
  showAlert();

  // SweetAlert2 no retorna JSX, solo dispara alertas
  return null;
};

export default SweetAlert2;
