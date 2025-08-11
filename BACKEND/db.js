// BACKEND/db.js
import pg from "pg";
const { Pool } = require(pg);

const pool = new Pool({
  host: 'localhost',
  port: 5432, 
  database: 'school', //Aqui ponene el nombre de su BD local 
  user: 'postgres', //Aqui ponen su usuario 
  password: '' //Aqui ponen su contraseña si no tienen lo ponen "" 
});

module.exports = pool;
