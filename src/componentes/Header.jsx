import { Link } from "react-router-dom";
import estilo from "../assets/estilos/Barranav.module.css";

function Header() {
  return (
    <header>
      <nav>
        <div className={estilo.navegador}>
          <Link to={"/teenagekicks/inventario"}>Medias</Link>
          <Link to={"/teenagekicks/carrito"}>Carrito</Link>
          <Link to={"/teenagekicks/soy"}>Soy</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
