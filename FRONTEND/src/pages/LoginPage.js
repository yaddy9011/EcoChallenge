import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";
import './ProfilePage.css'; // Ajuste si está en otra carpeta

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await login({ email, contraseña });
      navigate("/HomePage");
    } catch (e) {
      setErr("Credenciales inválidas");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmit} className="login-form">
        <h1>Iniciar sesión</h1>
        {err && <p className="login-error">{err}</p>}
        <input
          placeholder="Correo electrónico"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={contraseña}
          onChange={e => setContraseña(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
