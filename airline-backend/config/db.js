// config/db.js
require('dotenv').config();
const mysql = require('mysql2/promise');

// Create a connection pool to MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'airline_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection once when server starts
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL connected successfully to', process.env.DB_NAME);
    connection.release();
  } catch (err) {
    console.error('❌ Database Connection Failed:', err.message);
  }
})();

module.exports = pool;
