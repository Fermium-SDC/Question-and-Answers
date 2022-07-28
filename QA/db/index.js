require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool.query('SELECT * FROM photos', (err, res) => {
  console.log(err, res);
  pool.end();
});

module.exports = pool;
