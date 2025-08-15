import React, { useState } from 'react';

const RetosPage = () => {
  const [busqueda, setBusqueda] = useState('');
  const [hoveredId, setHoveredId] = useState(null);

  const retos = [
  { id: 1, titulo: 'Reto de Programación', descripcion: 'Crea una app en React', imagen: "C:\Users\ferna\OneDrive\Desktop\PAGINA WEB\EcoChallenge\FRONTEND\src\Imagen" },
  { id: 2, titulo: 'Reto de Diseño', descripcion: 'Diseña una landing page', imagen: "C:\\Users\\ferna\\OneDrive\\Desktop\\PAGINA WEB\\EcoChallenge\\FRONTEND\\src\\Imagen\\imagen2.png" },
  { id: 3, titulo: 'Reto de Electrónica', descripcion: 'Arma un circuito LED', imagen: "C:\\Users\\ferna\\OneDrive\\Desktop\\PAGINA WEB\\EcoChallenge\\FRONTEND\\src\\Imagen\\imagen3.jpg" },
  { id: 4, titulo: 'Reto de Fotografía', descripcion: 'Captura la mejor imagen', imagen: "C:\\Users\\ferna\\OneDrive\\Desktop\\PAGINA WEB\\EcoChallenge\\FRONTEND\\src\\Imagen\\imagen4.jpg" },
];


  const resultados = retos.filter(reto =>
    (reto.titulo + reto.descripcion).toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Muro de Retos</h1>
      <input
        type="text"
        placeholder="Buscar reto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={styles.busqueda}
      />
      <div style={styles.grid}>
        {resultados.map((reto) => (
          <div
            key={reto.id}
            style={{
              ...styles.card,
              transform: hoveredId === reto.id ? 'translateY(-12px) scale(1.07)' : 'translateY(0) scale(1)',
              boxShadow: hoveredId === reto.id ? '0 15px 30pxrgba(0,0,0,0.3)' : styles.card.boxShadow,
            }}
            onMouseEnter={() => setHoveredId(reto.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={reto.imagen}
              alt={reto.titulo}
              style={{
                ...styles.cardImg,
                transform: hoveredId === reto.id ? 'scale(1.12)' : 'scale(1)',
                filter: hoveredId === reto.id ? 'brightness(1.1)' : 'brightness(1)'
              }}
            />
            <h3 style={styles.cardTitle}>{reto.titulo}</h3>
            <p style={styles.cardDesc}>{reto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    textAlign: 'center',
    background: 'linear-gradient(135deg,#0d47a1,#42a5f5)',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#fff'
  },
  titulo: {
    fontSize: '3rem',
    marginBottom: '40px',
    color: '#00e5ff',
    fontWeight: '800',
    textShadow: '0 0 5px #00e5ff, 0 0 10px #00b8d4, 0 0 20px #00b8d4',
    letterSpacing: '2px'
  },
  busqueda: {
    padding: '12px 20px',
    width: '350px',
    fontSize: '1rem',
    marginBottom: '50px',
    border: '2px solid #00b8d4',
    borderRadius: '50px',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: '#e1f5fe',
    color: '#0d47a1',
    fontWeight: '500'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
    justifyContent: 'center'
  },
  card: {
    borderRadius: '25px',
    padding: '20px',
    width: '270px',
    background: 'linear-gradient(145deg, #2196f3, #64b5f6)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    cursor: 'pointer',
    overflow: 'hidden',
    color: '#fff'
  },
  cardImg: {
    width: '100%',
    height: '160px',
    objectFit: 'cover',
    borderRadius: '15px',
    marginBottom: '15px',
    transition: 'transform 0.4s ease, filter 0.4s ease'
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
    fontWeight: '700',
    color: '#00e5ff',
    textShadow: '0 0 3px #00e5ff, 0 0 6px #00b8d4'
  },
  cardDesc: {
    fontSize: '1rem',
    color: '#bbdefb',
    lineHeight: '1.5'
  }
};

export default RetosPage;