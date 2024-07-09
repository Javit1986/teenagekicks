import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../componentes/Layout";
import "../assets/estilos/App.css";
import UsarContexto, { useContexto } from "../contexto/UsarContexto";
import { UsarAlertaContexto } from "../contexto/AlertaContexto";
import AppContent from "./AppContent";
import "../firebase"; // Importa la configuración de Firebase

function App() {
  return (
    <BrowserRouter basename="/teenagekicks">
      <UsarContexto>
        <UsarAlertaContexto>
          <Layout>
            <AppContent />
          </Layout>
        </UsarAlertaContexto>
      </UsarContexto>
    </BrowserRouter>
  );
}

export default App;
