CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  contraseña VARCHAR(100) NOT NULL,
  rol VARCHAR(20) CHECK (rol IN ('usuario', 'admin')) DEFAULT 'usuario',
  puntos INTEGER DEFAULT 0,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE retos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descripcion TEXT,
  categoria VARCHAR(50),
  puntos_recompensa INTEGER NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  creado_por INTEGER REFERENCES usuarios(id)
);

CREATE TABLE evidencias (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  reto_id INTEGER REFERENCES retos(id) ON DELETE CASCADE,
  foto_url TEXT NOT NULL,
  fecha_subida TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  estado VARCHAR(20) CHECK (estado IN ('pendiente', 'aprobado', 'rechazado')) DEFAULT 'pendiente'
);

CREATE TABLE likes (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  evidencia_id INTEGER REFERENCES evidencias(id) ON DELETE CASCADE,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (usuario_id, evidencia_id)
);

CREATE VIEW ranking_semanal AS
SELECT 
  u.id,
  u.nombre,
  COUNT(e.id) AS retos_completados,
  SUM(r.puntos_recompensa) AS puntos_semana
FROM usuarios u
JOIN evidencias e ON u.id = e.usuario_id
JOIN retos r ON e.reto_id = r.id
WHERE e.estado = 'aprobado'
  AND e.fecha_subida >= date_trunc('week', CURRENT_DATE)
GROUP BY u.id
ORDER BY puntos_semana DESC
LIMIT 10;