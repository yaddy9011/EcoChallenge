INSERT INTO usuarios (nombre, email, contraseña, rol) 
VALUES 
  ('Admin Eco', 'admin@ecochallenge.com', 'hash123', 'admin'),
  ('Usuario Test', 'usuario@ecochallenge.com', 'hash456', 'usuario');

INSERT INTO retos (titulo, descripcion, categoria, puntos_recompensa, creado_por)
VALUES 
  ('Reciclaje Electrónico', 'Recicla 5 dispositivos electrónicos', 'reciclaje', 50, 1),
  ('Ahorro de Agua', 'Reduce tu consumo de agua en un 20% esta semana', 'agua', 30, 1);

INSERT INTO evidencias (usuario_id, reto_id, foto_url, estado)
VALUES 
  (2, 1, 'https://ejemplo.com/foto1.jpg', 'aprobado'),
  (2, 2, 'https://ejemplo.com/foto2.jpg', 'pendiente');