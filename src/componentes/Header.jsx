import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilo from "../assets/estilos/Barranav.module.css";
import { useContexto } from "../contexto/UsarContexto";

function Header() {
  const { uidval, adminUID } = useContexto();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (uidval !== null) {
      setIsReady(true);
    }
  }, [uidval]);

  return (
    <header>
      <nav>
        <div className={estilo.navegador}>
          <Link to={"/teenagekicks/inventario"}>Medias</Link>
          <Link to={"/teenagekicks/carrito"}>Carrito</Link>
          <Link to={"/teenagekicks/soy"}>Soy</Link>
          {isReady && uidval === adminUID && <Link to={"/teenagekicks/ABMadmin"}>::EDITAR::</Link>}
        </div>
      </nav>
    </header>
  );
}

export default Header;
