import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styles/ProfilePage.css';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    correo: "",
    password: "",
    confirmarPassword: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmarPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError("");
    console.log("Datos enviados:", formData);

    // Aquí podrías agregar la llamada a tu API de registro
    // y luego navegar al login si es exitoso
    navigate("/login");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Registro</h1>

        {error && <p className="login-error">{error}</p>}

        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellidoPaterno"
          placeholder="Apellido paterno"
          value={formData.apellidoPaterno}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="apellidoMaterno"
          placeholder="Apellido materno"
          value={formData.apellidoMaterno}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmarPassword"
          placeholder="Confirmar contraseña"
          value={formData.confirmarPassword}
          onChange={handleChange}
          required
        />

        <button type="submit" className="login-button">
          Registrarse
        </button>

        <button
          type="button"
          className="login-button"
          style={{ marginTop: "10px" }}
          onClick={() => navigate("/login")}
        >
          Volver a Iniciar sesión
        </button>
      </form>
    </div>
  );
}
