
import { useState } from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

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
    <form onSubmit={onSubmit}>
      <h1>Iniciar sesión</h1>
      {err && <p style={{color:"red"}}>{err}</p>}
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Contraseña" type="password" value={contraseña} onChange={e=>setContraseña(e.target.value)} />
      <button>Entrar</button>
    </form>
  );
}
