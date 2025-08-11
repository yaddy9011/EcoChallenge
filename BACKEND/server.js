import "./db.js"
import express from "express";
import cors from "cors";
// const express = require('express');
// const cors = require('cors');

const app = express();
app.use(cors()); // Permitir peticiones desde React

const PORT = 5000;

// Ruta básica para enviar un mensaje
app.get('/api/mensaje', (req, res) => {
  res.json({ mensaje: "Hola desde Node.js jazziii" });
});

// Importar rutas de tasks
const tasksRoutes = require('./Routes/tasks');
app.use('/api/tasks', tasksRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

