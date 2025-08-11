// BACKEND/db.js
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'school',
  user: 'postgres',
  password: 'tu_contraseña'
});

module.exports = pool;
