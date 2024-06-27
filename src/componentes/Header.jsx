import { Link } from "react-router-dom";
import estilo from "../assets/estilos/Barranav.module.css";

function Header() {
  return (
    <header>
      <nav>
        <div className={estilo.navegador}>
          <Link to={"/home"}>Soy</Link>
          <Link to={"/inventario"}>Medias</Link>
          <Link to={"/carrito"}>Carrito</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
