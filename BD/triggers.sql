CREATE OR REPLACE FUNCTION sumar_puntos()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.estado = 'aprobado' THEN
    UPDATE usuarios
    SET puntos = puntos + (SELECT puntos_recompensa FROM retos WHERE id = NEW.reto_id)
    WHERE id = NEW.usuario_id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_sumar_puntos
AFTER INSERT OR UPDATE ON evidencias
FOR EACH ROW
EXECUTE FUNCTION sumar_puntos();