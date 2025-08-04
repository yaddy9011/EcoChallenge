# Modelo Entidad-Relación EcoChallenge
mermaid
erDiagram
    USUARIO ||--o{ RETO : "crea"
    USUARIO ||--o{ EVIDENCIA : "sube"
    USUARIO ||--o{ LIKE : "da"
    RETO ||--o{ EVIDENCIA : "tiene_evidencias"
    EVIDENCIA ||--o{ LIKE : "recibe"

    USUARIO {
        integer id PK
        varchar(100) nombre
        varchar(100) email UK
        varchar(100) contraseña
        varchar(20) rol
        integer puntos
        timestamp fecha_registro
    }
    
    RETO {
        integer id PK
        varchar(100) titulo
        text descripcion
        varchar(50) categoria
        integer puntos_recompensa
        timestamp fecha_creacion
        integer creado_por FK
    }
    
    EVIDENCIA {
        integer id PK
        integer usuario_id FK
        integer reto_id FK
        text foto_url
        timestamp fecha_subida
        varchar(20) estado
    }
    
    LIKE {
        integer id PK
        integer usuario_id FK
        integer evidencia_id FK
        timestamp fecha
    }
