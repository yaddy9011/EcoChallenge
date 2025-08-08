// FRONTEND/src/App.js
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Páginas
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RetosPage from "./pages/RetosPage";
import RetoDetallePage from "./pages/RetoDetallePage";
import SubirEvidenciaPage from "./pages/SubirEvidenciaPage";
import MisRetosPage from "./pages/MisRetosPage";
import FeedPage from "./pages/FeedPage";
import RankingPage from "./pages/RankingPage";
import PerfilPage from "./pages/ProfilePage";

// Admin
import AdminHome from "./pages/admin/AdminHome";
import AdminRetosPage from "./pages/admin/AdminRetosPage";
import AdminEvidenciasPage from "./pages/admin/AdminEvidenciasPage";

export default function App() {
  // Simulación de usuario logueado (en la vida real vendría del backend)
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.rol === "admin";

  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Usuario logueado */}
        <Route path="/retos" element={<RetosPage />} />
        <Route path="/retos/:id" element={<RetoDetallePage />} />
        <Route path="/subir-evidencia/:retoId" element={<SubirEvidenciaPage />} />
        <Route path="/mis-retos" element={<MisRetosPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/perfil" element={<PerfilPage />} />

        {/* Admin */}
        {isAdmin && (
          <>
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/admin/retos" element={<AdminRetosPage />} />
            <Route path="/admin/evidencias" element={<AdminEvidenciasPage />} />
          </>
        )}

        {/* 404 */}
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}
