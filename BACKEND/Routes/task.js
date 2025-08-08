// BACKEND/routes/tasks.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET todas
router.get('/', async (_req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tasks ORDER BY id DESC;');
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: 'Error obteniendo tareas' });
  }
});

// GET una por id
router.get('/:id', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tasks WHERE id = $1;', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'No encontrada' });
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: 'Error' });
  }
});

// POST crear
router.post('/', async (req, res) => {
  try {
    const { title, done = false } = req.body;
    const { rows } = await pool.query(
      'INSERT INTO tasks (title, done) VALUES ($1, $2) RETURNING *;',
      [title, done]
    );
    res.status(201).json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: 'Error creando tarea' });
  }
});

// PUT actualizar
router.put('/:id', async (req, res) => {
  try {
    const { title, done } = req.body;
    const { rows } = await pool.query(
      'UPDATE tasks SET title = COALESCE($1, title), done = COALESCE($2, done) WHERE id = $3 RETURNING *;',
      [title, done, req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'No encontrada' });
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: 'Error actualizando' });
  }
});

// DELETE borrar
router.delete('/:id', async (req, res) => {
  try {
    const { rowCount } = await pool.query('DELETE FROM tasks WHERE id = $1;', [req.params.id]);
    if (rowCount === 0) return res.status(404).json({ error: 'No encontrada' });
    res.sendStatus(204);
  } catch (e) {
    res.status(500).json({ error: 'Error eliminando' });
  }
});

module.exports = router;
