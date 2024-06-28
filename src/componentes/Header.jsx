import { Link } from "react-router-dom";
import estilo from "../assets/estilos/Barranav.module.css";

function Header() {
  return (
    <header>
      <nav>
        <div className={estilo.navegador}>
          <Link to={"/teenagekicks/home"}>Soy</Link>
          <Link to={"/teenagekicks/inventario"}>Medias</Link>
          <Link to={"/teenagekicks/carrito"}>Carrito</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
