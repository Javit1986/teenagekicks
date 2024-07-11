import { HashRouter } from "react-router-dom";
import Layout from "../componentes/Layout";
import "../assets/estilos/App.css";
import UsarContexto, { useContexto } from "../contexto/UsarContexto";
import { UsarAlertaContexto } from "../contexto/AlertaContexto";
import AppContent from "./AppContent";
import "../firebase"; // Importa la configuración de Firebase

function App() {
  return (
    <HashRouter>
      <UsarContexto>
        <UsarAlertaContexto>
          <Layout>
            <AppContent />
          </Layout>
        </UsarAlertaContexto>
      </UsarContexto>
    </HashRouter>
  );
}

export default App;
